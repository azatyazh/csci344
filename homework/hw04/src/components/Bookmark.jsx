import React, {useState} from "react";
import { postDataToServer, deleteDataFromServer} from "../server-requests";

export default function Bookmark({ token, bookmarkId, postId }) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    console.log(bookmarkId);
    
    async function createBookmark() {
        const sendData = {
            "post_id": postId,
        };

        console.log("creating a bookmark...")

        const responseData = await postDataToServer(token, "/api/bookmarks/", sendData);
        console.log(responseData);

        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        const url = '/api/bookmarks/' + stateBookmarkId;
        console.log("delete a bookmark...")

        const responseData = await deleteDataFromServer(token, url);
        console.log(responseData);

        setStateBookmarkId(null);
    }


    if(stateBookmarkId) {
        return (
            <button aria-label="create" aria-checked = "false" aria-role="toggle" onClick={deleteBookmark}>
                <button aria-label="bookmark"> <i className="fas fa-bookmark"></i> </button> 
            </button>
        );
    } else {
        return (
            <button aria-label="delete" aria-checked = "true" aria-role="toggle" onClick={createBookmark}>
                <button aria-label="bookmark"> <i className="far fa-bookmark"></i> </button>
            </button>
        );
    }
}