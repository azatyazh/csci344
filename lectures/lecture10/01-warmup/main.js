let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    fill(r, g, b);
    
    circle(mouseX, mouseY, 100);
    // Math.random(fill('hotpink'));
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    circle(mouseX, mouseY, 100);
    square(mouseX, mouseY, 50);
    // Math.random(fill('hotpink'));

}

/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
