import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post"

//fetch post data from the server, and iterate through each element and draws post
export default function Posts({ token }) {

    //state variables: every time a state variable gets a set, it redraws the component
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        //fetches data form https://photo-app-secured.herokuapp.com/api/posts/
        const data = await getDataFromServer(token, "/api/posts");

        //printing that data to the screen
        // console.log(data);

        //setting a state variable
        // console.log("Setting a state variable to redraw the screen after the posts are set..");
        setPosts(data); //state variable setters always redraw the screen 
    }

    //useEffect is a build-in function designed to handle "side effects" when the fist loads:
    useEffect(() => {
        getPosts();
    }, []);

    // console.log(posts);
    function outputPost(postObj) {
        return <Post token={token} key={postObj.id} postData={postObj} />
    }
    return (
        <div>
            {
                posts.map(outputPost)
            }
        </div>
    );
}
