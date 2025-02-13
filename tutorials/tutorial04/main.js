let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {

    //sets up your canvas 
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5CirclesFor();
    draw5RedSquares();

    //draaws the grid 
    drawGrid(canvasWidth, canvasHeight);


// my first function
function draw5CirclesFor() {
    noFill();
    // fill('red');

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

    // while (y < 1000) {
    //     y += 10;
    //     d += 1;
    //     circle (x, y, d);
    // }

    // circle (100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);
}

function draw5RedSquares() {
    noFill();

    let x = 30;
    let y = 50;
    let d = 10; 
    let e = 10;

    let i = 0; 

    while (i < 170) {

        if (i % 2 === 0) {
            fill ('black');
        } else {
            fill ('grey');
        }
        rect(x + 100, y, d);
        rect(x + 200, y, d);
        rect(x + 300, y, d);
        rect(x + 400, y, d);
        rect(x + 500, y, d);
        i++;
        y += 210;
        // x += 20;
    }
}

}
