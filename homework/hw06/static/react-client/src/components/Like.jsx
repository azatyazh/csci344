import React, {useState} from "react";
import {postDataToServer, deleteDataFromServer} from "../server-requests"

export default function Like({likeId, postId, token}) {
const [stateLikeId, setStateLikeId] = useState(likeId);
    console.log(likeId);

    async function createLike() {
        const sendData = {
                    post_id: postId,
                };
                console.log("creating a like...");

                const responseData = await postDataToServer(token, "/api/likes/", sendData);
                console.log(responseData);

                setStateLikeId(responseData.id);
            }

    async function deleteLike(){
        const url = '/api/likes/' + stateLikeId;
            console.log("delete a like...")
    
            const responseData = await deleteDataFromServer(token, url);
            console.log(responseData);
    
            setStateLikeId(null);

        }   


    if (stateLikeId) {
        return (
            <button aria-label="create" aria-checked = "false" aria-role="toggle" onClick={deleteLike}>
               <i className="fas text-red-700  fa-heart"></i>
            </button>
        );
    } else {
        return (
            <button aria-label="delete" aria-checked = "true" aria-role="toggle" onClick={createLike}>
               <i className="far fa-heart"></i>
            </button>
        );
    }
}



