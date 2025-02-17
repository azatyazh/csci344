let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {

    //sets up your canvas 
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    // draw5CirclesFor();
    // draw5CirclesWhile();
    // // drawNCircles(20);
    // drawNCircles(5);

    // drawNCirclesFlexible(30, 25, 400, 0, 'teal');
    // drawNCirclesFlexible(4, 100, 100, 200, 'hotpink');
    // drawNCirclesFlexible(8, 50, 700, 100, 'pink');

    // drawNShapesFlexible(30, 30, 335, 0, "square", 'teal');
    // drawNShapesFlexible(4, 100, 120, 200, "circle", 'pink');
    // drawNShapesFlexible(8, 50, 725, 25, "square", 'brown');

    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column", 'pink');
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row", 'red');
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row", 'teal');

    //draaws the grid 
    drawGrid(canvasWidth, canvasHeight);


// my first function
function draw5CirclesFor() {
    noFill();

    let x = 40;
    let y = 40;
    let d = 50;
    let i = 0;

    while(i < 170) {

        if (i % 2 === 0) {
            fill('white');
        } else {
            fill('teal');
        }

        circle(x, y, d);
        circle(x + 600, y, d);
        circle(x + 300, y, d);
        circle(x + 900, y, d);
        circle(x + 1200, y, d);
        i++;            
        y += 40;                
    }
}

function draw5CirclesWhile() {
    noFill();
    let x = 40;
    let y = 40;
    let d = 50;
    let i = 0;

    while(i < 5) {
        fill(i % 2 == 0 ? 'white' : 'teal')
        circle(x, y, d);
        y += d + 10;
        i++;
    }
}

function drawNCircles(n) {
    noFill();

    let x = 30;
    let y = 30;
    let d = 10;

    for (let i = 0; i < n; i++) {
        fill(i % 2 == 0 ? 'white' : 'brown');
        circle(x, y, d);
        y += d + 10;
    }
}

function drawNCirclesFlexible(n, size, x, y, color) {

    let i = 0;
    fill(color);
    while (i < n){
        circle(x, y, size);
        y += size;
        i++;
    }
}

function drawNShapesFlexible(n, size, x, y, shape, color){

    let i = 0;
    fill(color);

    while (i < n){
        if (shape == 'square') {
            square(x, y, size);

        } else {
            circle(x, y, size);
        }
        y += size;
        i++;
    }
}


function drawNShapesDirectionFlexible(n, size, x, y, shape, direction, color) {
    let i = 0;
    fill(color);

    while (i < n){
        if (shape == 'circle') {
           circle(x, y, size);

        } else {
            square(x, y, size);
        }

        if(direction == 'column') {
            y += size;
        } else {
            x += size;
        }
        i++;
    }
}

}
