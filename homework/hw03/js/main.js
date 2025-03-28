import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "alina";
let password = "password";

async function initializeScreen() {
    token = await getAccessToken(rootURL, username, password);
    showNav();
    getPosts();
    getStories();
    getSuggestions();
    getProfile();
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button aria-label="Sign out" class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

async function getPosts() {
    const endpoint = 
        "https://photo-app-secured.herokuapp.com/api/posts/?limit=10";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const posts = await response.json();

    console.log(posts);
    showPosts(posts);
}

function showPosts(posts) {
    //get a reference to the HTML tag where we want to add the posts: 
    const mainEl = document.querySelector("main");

    //loop through each post and append an HTML representation of the post to the DOM:
    posts.forEach(post => {
        const template = `
        <section class="bg-white border mb-10">
        <div class="p-4 flex justify-between">
            <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
            <button aria-label="Three dots" class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300"
            class="w-full bg-cover">
        <div class="p-4">
            <div class="flex justify-between text-2xl mb-3">
                <div>
                    ${ getLikeButton(post) }
                    <button aria-label="comments" ><i class="far fa-comment"></i></button>
                    <button aria-label="comments"><i class="far fa-paper-plane"></i></button>
                </div>
                <div>
                    ${ getBookmarkButton(post) }
                </div>
            </div>
            <p class="font-bold mb-3">${post.likes.length} likes</p>
                
            <div class="text-sm mb-3">
                <p>
                    <strong>${post.user.username}</strong>
                    ${post.caption}
                </p>
            </div>
            ${showComments(post.comments)}
            <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
        </div>
        <div class="flex justify-between items-center p-3">
            <div class="flex items-center gap-3 min-w-[80%]">
                <i class="far fa-smile text-lg"></i>
                <input aria-label="Add a comment" type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
            </div>
            <button aria-label="Post" class="text-blue-500 py-2">Post</button>
        </div>
    </section>
    `;
        mainEl.insertAdjacentHTML("beforeend", template);
    });   
}

function showComments(comments) {
    if(comments.length > 1) {
        const lastComment = comments[comments.length-1];
        return `
            <button aria-label="Comments" class="text-sm mb-3">view all ${comments.length} comments</button>
            <p class="text-sm mb-3">
                <strong>${lastComment.user.username}</strong> ${lastComment.text}
            </p>
        `;
    }
    if(comments.length === 1) {
        const lastComment = comments[0];
       return `<p class="text-sm mb-3">
            <strong>${lastComment.user.username}</strong> ${lastComment.text}
            </p>`
    } 
    return '';
}

function getLikeButton(post) {
    if (post.current_user_like_id) {
        //already liked
        return `<button aria-label="Remove like" onclick="deleteLike(${post.current_user_like_id})"><i class="fa-solid text-red-700 fa-heart"></i></button>`
    } else {
        //not liked
        return `
        <button aria-label="Add a like" onclick="createLike(${post.id})">
                <i class="far fa-heart"></i>
         </button>`;
    }
}

window.createLike = async function(postID) {
    const postData = {
        post_id: postID,
    };

    const response = await fetch(
        "https://photo-app-secured.herokuapp.com/api/likes/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        }
    );
    const data = await response.json();
    console.log(data);
}

window.deleteLike = async function(heartId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/likes/${heartId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
}

function getBookmarkButton(post) {
    if (post.current_user_bookmark_id) {
        //already bookmarked
        return `<button aria-label="Remove bookmark" onclick="deleteBookmark(${post.current_user_bookmark_id})"><i class=" fa-solid fa-bookmark"></i></button>`
    } else {
        //not bookmarked
        return `
            <button aria-label="Add a bookmark" onclick="createBookmark(${post.id})">
                <i class="far fa-bookmark"></i>
            </button>`;
    }
}

window.createBookmark = async function(postID) {
    const postData = {
        post_id: postID,
    };

    const response = await fetch(
        "https://photo-app-secured.herokuapp.com/api/bookmarks/", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, 
            },
            body: JSON.stringify(postData),
        }    
    );
    const data = await response.json();
    console.log(data);
}
    
window.deleteBookmark = async function(bookmarkId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
        }
    });
    const data = await response.json();
    console.log(data);
}

//stories 
async function getStories() {
    
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/stories/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    drawStories(data);
}

function drawStories(stories) {
    const header = document.querySelector("main header");
    stories.forEach(story => {
        const template = `
            <div class="flex flex-col justify-center items-center">
                <img src="${story.user.thumb_url}" alt="image random 5" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">${story.user.username}</p>
            </div>
        `;
        header.insertAdjacentHTML("beforeend", template);
    })
}

//suggested accounts 
async function getSuggestions() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/suggestions/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    drawSuggestions(data);
}

function drawSuggestions(suggestionList) {
    const header = document.querySelector("#suggestions");
    suggestionList.forEach(suggested => {
        const template = `
            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="${suggested.thumb_url}" alt="image random 10" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">${suggested.username}</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button  class="text-blue-500 text-sm py-2">follow</button>
            </section> 
        `;
        // replase the photo and username ${??. user.username} and photo ${??.user.thumb_url}
        header.insertAdjacentHTML("beforeend", template);
    })
}

async function getProfile() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    drawProfile(data);
}

function drawProfile(theProfile) {
    const header = document.querySelector("#theprofile");
        const template = `
        <header id="theprofile" class="flex gap-4 items-center">
            <img src="${theProfile.thumb_url}" alt="image random 11" class="rounded-full w-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">${theProfile.first_name}</h2>
        </header>
        `;
        header.insertAdjacentHTML("beforeend", template);
}

initializeScreen();
