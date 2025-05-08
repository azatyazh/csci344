import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Suggestion from "./Suggestion"

export default function Suggestions({ token }) {

    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
        const data = await getDataFromServer(token, "/api/suggestions");

        setSuggestions(data);
    }

    useEffect(() => {
        getSuggestions();
    }, []);

    function outputSuggestion(suggestionObj) {
        return <Suggestion token={token} key={"suggestion_"+suggestionObj.id} suggestionData={suggestionObj} />
    }
    return (
        <div className="mt-4">
           {
            suggestions.map(outputSuggestion)
           }
        </div>
    );
}
