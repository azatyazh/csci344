let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) { //function that moves the carusel 
    const items = document.querySelectorAll(".carousel-item"); // geting all the caruousel items

    if (direction == "forward") { //move forward 
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;
        }

        //checking if we are at the last possible position leaving 2 slides visible
        //if yes, return false to prevent movement? 
        currentPosition++;
        //increment 
    } else {
        //move backwards 
        //if at first position '0' we don't go further 
        if (currentPosition == 0) {
            return false;
        }
        //subtract the position movement backwards 
        currentPosition--;
    }

    //calculate depending on gap, width, and current position 
    const offset = (slideWidth + gap) * currentPosition;

    //loop through 
    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
