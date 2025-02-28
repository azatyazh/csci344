/**********/
/* 2. Map */
/**********/

const myNums = [1, 2, 3, 4, 5];
const squareNums = (item) => item ** 2;
const cubeNums = (item) => item ** 3;
const convertToString = (item) => String(item);

// The map function applies a transformation function to each element of a list,
// and returns a *new* list of values.

// const result1 = myNums.map(squareNums);
// console.log(result1);


// const result2 = myNums.map(cubeNums);
// console.log(result2);

// const result3 = myNums.map(convertToString);
// console.log(result3);

// CHALLENGE:
// How could you use the map function that creates a new array where each
// number in the original array is return inside a paragraph tag?

// const goal = ['<p>1</p>', '<p>2</p>', '<p>3</p>', '<p>4</p>','<p>5</p>', ];

const paragaphify = (item) => `<p>${item}</p>`; 

const paragraphArray = myNums.map(paragaphify);
console.log(paragaphify);