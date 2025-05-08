import React from "react"

import Bookmark from "./Bookmark";
import Like from "./Like";

//Job: create a tastful rep. of the post using data passed in from the parent

export default function Post({ postData, token }) {

    function outputComment() {

        if(postData.comments.length === 0) {
            return "";
        }

        if(postData.comments.length === 1) {
            const comment = postData.comments[0];
            return (
            <div>
            {/* comments */}

            <p className="flex gap-2 text-sm mb-3">
                <strong>{comment.user.username}</strong>
                {comment.text}
            </p>
            </div> );
        }

        if(postData.comments.length > 1) {
            const comment = postData.comments[postData.comments.length - 1];
            return (
            <div>
            {/* comments */}

            <button aria-label="comments">
                View all {postData.comments.length} comments
            </button>

            <p className="flex gap-2 text-sm mb-3">
                <strong>{comment.user.username}</strong>
                {comment.text}
            </p>
    
            </div> );
        }
    }

    console.log(postData);
    return (
        <section className="bg-white border mb-10">
            {/* user header  */}
            <div className="p-4 flex justify-between">
                <h3 className="text-lg font-Comfortaa font-bold">{postData.user.username}</h3>
                <button aria-label="header" className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
            </div>
            {/* image */}
            <img 
            src={postData.image_url} alt={postData.alt_text || "Post data"} 
            width="300" height="300"
            className="w-full bg-cover">

            </img>

            {/* buttons */}
            <div className="p-4">
                <div className="flex justify-between text-2xl mb-3">
                    <div className="flex gap-2">
                        {/* like button */}
                        <Like likeId={postData.current_user_like_id} postId={postData.id} token={token} />
                        {/* other */}
                        <button aria-label="comments"><i className="far fa-comment"></i></button>
                        <button aria-label="share"><i className="far fa-paper-plane"></i></button>
                    </div>

                {/* bookmar button */}
                    <Bookmark bookmarkId={postData.current_user_bookmark_id} 
                    postId={postData.id} 
                    token={token}
                    />
                </div>

                {/* likes */}
                <p className="font-bold mb-3">{postData.likes.length} likes</p>

                {/* caption made by the other  */}
                <div className="text-sm mb-3">
                    <p className="flex gap-2">
                        <strong>{postData.user.username}</strong>
                        {postData.caption}
                        <button aria-label="caption" className="button">more</button>
                    </p>
                </div>
            {outputComment()}

            <p className="uppercase text-gray-500 text-xs">
                {postData.display_time}
            </p>
            </div>
        </section>
    )
}

