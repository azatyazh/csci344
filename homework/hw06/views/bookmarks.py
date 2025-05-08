import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post
from views import get_authorized_user_ids 
import flask_jwt_extended


class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def get(self):
        # TODO: Add GET Logic...
        #returning bookmarks saved 

        bookmarks = Bookmark.query.filter_by(user_id=self.current_user.id).all()
        data = [item.to_dict() for item in bookmarks]

        return Response(
            json.dumps(data),
            mimetype="application/json",
            status=200,
        )
    
    '''
    Goal: Crate a bookmark (so saves a post to bookmarks)
    To Do: Request the information 
           
    '''

    @flask_jwt_extended.jwt_required()
    def post(self):
        # TODO: Add POST Logic...

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
                status=400,
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
        
        #check that you're allowed to like the post:
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        if post.user_id not in ids_for_me_and_my_friends:
            return Response(
                json.dumps({"message": "You are not authorized to like this post!"}),
                mimetype="application/json",
                status=404,
            )
        
        #check that we've not already bookedmarked it:
        already_bookmarked = Bookmark.query.filter_by(
            user_id=self.current_user.id, 
            post_id=post_id
            ).one_or_none()
        
        if already_bookmarked is not None: 
            return Response(
                json.dumps({"message": "You are not authorized to bookmark this post!"}),
                mimetype="application/json",
                status=400,
            )

        new_bookmark = Bookmark(
            user_id = self.current_user.id, 
            post_id = post_id
        )

        db.session.add(new_bookmark)
        db.session.commit()
        db.session.refresh(new_bookmark)
        print(new_bookmark)

        return Response(
                    json.dumps(new_bookmark.to_dict()), 
                    mimetype="application/json", 
                    status=201
                    )
    

class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        # TODO: Add Delete Logic...

        bookmark = Bookmark.query.get(id)

        if bookmark is None:
            return Response(
                json.dumps({"Message": f"Post id not found"}),
                mimetype="application/json",
                status=404,
            )
        
        #check if the user ownes the bookmark
        if bookmark.user_id != self.current_user.id:
            return Response(
                json.dumps({"Message": f"You are not allowed to modify post id"}),
                mimetype="application/json",
                status=404,
            )
        
        # Now do the delete:
        Bookmark.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )

def initialize_routes(api, current_user):
    api.add_resource(
        BookmarksListEndpoint,
        "/api/bookmarks",
        "/api/bookmarks/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        BookmarkDetailEndpoint,
        "/api/bookmarks/<int:id>",
        "/api/bookmarks/<int:id>",
        resource_class_kwargs={"current_user": current_user},
    )
