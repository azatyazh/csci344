

// function toggleMenu(){
//     const nav = document.querySelector(".nav-links");

//     if(nav.className === "nav-links active") {
//         nav.className = "nav-links"
//     } else {
//         nav.className = "nav-links active";
//     }
   
// }

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    const button = document.querySelector("#menu-toggle");

    nav.classList.toggle("active");
    button.classList.toggle("active");

}
 