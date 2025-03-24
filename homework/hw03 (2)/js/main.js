import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "alina";
let password = "password";

async function initializeScreen() {
    token = await getAccessToken(rootURL, username, password)
    showNav();

    getPosts();
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

async function getPosts() {
    //ge the HTTP response header: 
    const endpoint = 
        "https://photo-app-secured.herokuapp.com/api/posts/?limit=10";
    const response = await fetch (endpoint, {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    //get the HTTP body (JSON object)
    const posts = await response.json();

    //pring the data to the console: 
    console.log(posts);

    //invoke this function to actually darw the posts to the screen: 
    showPosts(posts);
}

function showPosts(posts) {
    //get a reference to the HTML tag where we want to add the posts:
    const mainEl = document.querySelector("main");

    //loop through each post and append an HTML represenation of the post to the DOM: 
    posts.forEach(posts => {
        const template = `

            <section class="bg-white border mb-10">
                <div class="p-4 flex justify-between">
                    <h3 class="text-lg font-Comfortaa font-bold">${postJSON.user.username}</h3>
                    <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
                </div>
                <img src="${postJSON.image_url}" alt="placeholder image" width="300" height="300"
                    class="w-full bg-cover">
                <div class="p-4">
                    <div class="flex justify-between text-2xl mb-3">
                        <div>
                            <button><i class="far fa-heart"></i></button>
                            <button><i class="far fa-comment"></i></button>
                            <button><i class="far fa-paper-plane"></i></button>
                        </div>
                        <div>
                        ${renderBookmarkButton(postJSON)}
                        </div>
                    </div>
                    <p class="font-bold mb-3">${postJSON.likes.length} likes</p>
                    <div class="text-sm mb-3">
                        <p>
                            <strong>${postJSON.user.username}</strong>
                            ${postJSON.caption}<button class="button">more</button>
                        </p>
                    </div>
                    ${showComments(post.comments)}
                    
                    <p class="uppercase text-gray-500 text-xs">1 day ago</p>
                </div>
                <div class="flex justify-between items-center p-3">
                    <div class="flex items-center gap-3 min-w-[80%]">
                        <i class="far fa-smile text-lg"></i>
                        <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                    </div>
                    <button class="text-blue-500 py-2">Post</button>
                </div>
            </section>
        `;

        mainEl.insertAdjacentHTML("beforeend", template);
    });
}

//input: comments 
//output: HTML string represnting the commets
function showComments(comments) {
    if(comments.length > 1){
        const lastComment = comments[comments.length-1];
        return `
            <button> View all ${comments.length} comments </button>
            <p>${lastComment.user.username} ${lastComment.text}</p>
        `;
    }
    if (comments.length === 1) {
        return `<p>${comments[0].user.username} ${comments[0].text}</p>`
    }
    return ''    
}

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();