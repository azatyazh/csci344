import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.post import Post
from views import get_authorized_user_ids


def get_path():
    return request.host_url + "api/posts/"


class PostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):

        '''
        return the first 20 posts in the user's feed. 
        If the user specifies a limit, honor the limit unless it's above 50,
        then return an error  
        '''

        count = request.args.get("limit")
        if count is None:
            count = 20
        try:
            count = int(count)
        except: 
            #user passed a string into the limit parameter
            return Response(
                json.dumps({
                    "message": "limit must be an integer"
                }),
                mimetype="application/json", 
                status=400
            )
        if count > 50:
            return Response(
                json.dumps({
                    "message": "max number is 50"
                }),
                mimetype="application/json", 
                status=400
            )


        # giving you the beginnings of this code (as this one is a little tricky for beginners):
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        #[3, 7, 8, 10, 12]
        posts = (
            Post.query
            .filter(Post.user_id.in_(ids_for_me_and_my_friends))
            .limit(count)
        )
        

        # TODO: add the ability to handle the "limit" query parameter:

        data = [item.to_dict(user=self.current_user) for item in posts.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)

    def post(self):
        # TODO: handle POST logic
        #capture data that the user set us (and if the user didn't give us the data we need, throw an error)

        image_url = request.args.get('image_url') #required
        caption = request.args.get('caption') #optional 
        alt_text = request.args.get('alt_text') #optional

        if image_url is None:
            return Response (
                json.dumps({
                    "message": "image_url is a required field."
                    }),
                mimetype="application/json",
                status=400
            )

        return Response(json.dumps({}), mimetype="application/json", status=201)


class PostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def patch(self, id):
        print("POST id=", id)
        # TODO: Add PATCH logic...
        return Response(json.dumps({}), mimetype="application/json", status=200)

    def delete(self, id):
        print("POST id=", id)

        # TODO: Add DELETE logic...
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )

    def get(self, id):
        print("POST id=", id)
        # TODO: Add GET logic...
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        PostListEndpoint,
        "/api/posts",
        "/api/posts/",
        resource_class_kwargs={"current_user": current_user},
    )
    api.add_resource(
        PostDetailEndpoint,
        "/api/posts/<int:id>",
        "/api/posts/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
