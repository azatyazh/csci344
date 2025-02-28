const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:

function drawMonster(x, y, size, color, isSuprised){

    //set the color 
    //make the face rectangle (x y width and height)

    rectMode(CENTER);
    fill(color);
    rect(x, y, size, size);
    fill("white");

    const eyeXLeft = x - size / 3;
    const eyeXRight = x + size / 3;

    const eyeY = y - size / 4;
    const eyeBallWidth = size / 5;
    const pupilWidth = size / 10; 


    rect(eyeXLeft, eyeY, eyeBallWidth, eyeBallWidth);
    rect(eyeXRight, eyeY, eyeBallWidth, eyeBallWidth);

    fill("black");

    rect(eyeXLeft, eyeY + size / 20, pupilWidth, pupilWidth);
    rect(eyeXRight, eyeY + size / 20, pupilWidth, pupilWidth);

    // if(isSuprised) {

    //     else 

    // }

    // make bulls eye with different colors for quiz 


    //set the color 
    //two more smaller rectangles (math to x y width and height)
    //set the color to black 
    //make two pupils 
    //make the mouth needs the if else -- frog mouth for suprise mouth 



}