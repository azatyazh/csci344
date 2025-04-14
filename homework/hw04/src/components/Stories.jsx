import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {

    const [stories, setStories] = useState([]);

    async function getStories() {
        const data = await getDataFromServer(token, "/api/stories");
        console.log(data)
        setStories(data);
    }

    useEffect(() => {
        getStories();
    }, []); 

    function outputStory(storyObj) {
        return (
            <div className="flex flex-col justify-center items-center" key={"story_"+storyObj.id}>

                <img src={storyObj.user.thumb_url} alt="image profile" className="rounded-full border-4 border-gray-300" />
                <p className="text-xs text-gray-500">{storyObj.user.username}</p>
            </div>
        )
    }

    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {
                stories.map(outputStory)
            }
        </header>
    );
}
