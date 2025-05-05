import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.comment import Comment
from models.post import Post
from views import get_authorized_user_ids 


class CommentListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def post(self):
        # TODO: Add POST logic...

        #requesting the post information 
        body = request.get_json()
        post_id = body.get('post_id') if body else None

        #if the user didn't give me a post id yell at them :)
        if post_id is None:
            return Response(
                json.dumps({
                        "message": "post_id is required field."
                        }),
                mimetype="application/json",
                status=404,
            )
        
        print(post_id)

        #check if the post id is an integer 
        try:
            post_id = int(post_id)
        except:
            return Response(
                json.dumps({"message": "Invalid post_id"}),
                mimetype="application/json",
                status=400,
            )
        
        #does the post even exist?
        post = Post.query.get(post_id)
        if post is None:
            return Response(
                json.dumps({"message": f"Post id not found"}),
                mimetype="application/json",
                status=404,
            )
        
        #check that you're allowed to comment the post:
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        if post.user_id not in ids_for_me_and_my_friends:
            return Response(
                json.dumps({"message": "You are not authorized to like this post!"}),
                mimetype="application/json",
                status=404,
            )
        
        #check that we've not already commented it:
        already_commented = Comment.query.filter_by(
            user_id=self.current_user.id, 
            post_id=post_id
            ).one_or_none()
        
        if already_commented is not None: 
            return Response(
                json.dumps({"message": "You are not authorized to comment this post!"}),
                mimetype="application/json",
                status=400,
            )
        
        #get the text so we have comment
        so_text = body.get('text')
        if not so_text:
            return Response(
            json.dumps({"message": "Comment text is required."}),
            mimetype="application/json",
            status=400,
        )
        #we're creating the comment 
        new_comment = Comment(
            user_id = self.current_user.id, 
            post_id = post_id,
            text=so_text
        )

        db.session.add(new_comment)
        db.session.commit()
        db.session.refresh(new_comment)
        print(new_comment)

        return Response(
                    json.dumps(new_comment.to_dict()), 
                    mimetype="application/json", 
                    status=201
                    )



class CommentDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # TODO: Add DELETE logic...

        comment = Comment.query.get(id)

        if comment is None:
            return Response(
                json.dumps({"Message": f"Post id not found"}),
                mimetype="application/json",
                status=404,
            )
        
        #check if the user ownes the comment
        if comment.user_id != self.current_user.id:
            return Response(
                json.dumps({"Message": f"You are not allowed to modify post id"}),
                mimetype="application/json",
                status=404,
                #404?
            )
        
        # Now do the delete:
        Comment.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )

        # print(id)

def initialize_routes(api, current_user):
    api.add_resource(
        CommentListEndpoint,
        "/api/comments",
        "/api/comments/",
        resource_class_kwargs={"current_user": current_user},
    )
    api.add_resource(
        CommentDetailEndpoint,
        "/api/comments/<int:id>",
        "/api/comments/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
