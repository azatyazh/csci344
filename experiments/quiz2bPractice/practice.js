
//Higher Order Array Functions: Practice

// // Make a fetch request to a URL
// fetch('https://api.example.com/data')
//   .then(response => {
//     // The promise resolves with a Response object
//     console.log(response); // This is a Response object
//     return response.json(); // You can then process the response, e.g., convert it to JSON
//   })
//   .then(data => {
//     console.log(data); // Now you can use the data returned from the API
//   })
//   .catch(error => {
//     console.error('Error:', error); // Handle any errors that occurred during the fetch
//   });


// 1. Merge Objects and Arrays

// // Merging two objects using the spread operator
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj); // Expected output: { a: 1, b: 2, c: 3, d: 4 }

// // Merging two arrays using the spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArr = [...arr1, ...arr2];

// console.log(mergedArr); // Expected output: [1, 2, 3, 4, 5, 6]


// 2. Object Destructuring
// 2.1. Extract Object Properties

// const user = { name: "Alice", age: 25, city: "New York" };
// const { name, age } = user;

// console.log(name); // Expected output: Alice
// console.log(age);  // Expected output: 25


// 3. forEach
// 3.1. Iterate and Print Array Elements

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => {
//   console.log(num); // Expected output: 1 2 3 4 5 (one per line)
// });


// 4. map
// 4.1. Double Each Element

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); // Expected output: [2, 4, 6, 8, 10]


// 5. filter
// 5.1. Filter Even Numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Expected output: [2, 4, 6, 8]

// 6. reduce
// 6.1. Sum of Array Elements

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // Expected output: 15







//Basic Programming Practice


// 1. Conditionals
// 1.1 Which Decade?

// const age = parseInt(prompt("Enter your age:"));

// if (age >= 20 && age <= 29) {
//   console.log("You are in your 20s");
// } else if (age >= 30 && age <= 39) {
//   console.log("You are in your 30s");
// } else if (age >= 40 && age <= 49) {
//   console.log("You are in your 40s");
// } else {
//   console.log("IDK");
// }


// 1.2 Color Mixer

// const red = parseInt(prompt("Do you have red paint? (1 for yes, 0 for no)"));
// const blue = parseInt(prompt("Do you have blue paint? (1 for yes, 0 for no)"));
// const yellow = parseInt(prompt("Do you have yellow paint? (1 for yes, 0 for no)"));

// const isRed = Boolean(red);
// const isBlue = Boolean(blue);
// const isYellow = Boolean(yellow);

// if (isRed && isBlue && isYellow) {
//   console.log("black");
// } else if (isRed && isBlue) {
//   console.log("purple");
// } else if (isRed && isYellow) {
//   console.log("orange");
// } else if (isBlue && isYellow) {
//   console.log("green");
// } else if (isRed) {
//   console.log("red");
// } else if (isBlue) {
//   console.log("blue");
// } else if (isYellow) {
//   console.log("yellow");
// } else {
//   console.log("white");
// }


// 2. Loops
// 2.1 Output the numbers 0-99 (Ascending Order)

// let i = 0;
// while (i < 100) {
//   console.log(i);
//   i++;
// }


// 2.2 Output the numbers 0-99 (Descending Order)

// let i = 99;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }


// 2.3 Output even numbers between 0 and 99

// let i = 0;
// while (i < 100) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }


// 2.4 Output odd numbers between 0 and 99

// let i = 1;
// while (i < 100) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }


// 2.5 Output the numbers 0-99 (Ascending Order with a For Loop)

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }


// 2.6 Output the numbers 0-99 (Descending Order with a For Loop)

// for (let i = 99; i >= 0; i--) {
//   console.log(i);
// }


// 2.7 Output even numbers between 0 and 99 (For Loop)

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// 2.8 Output odd numbers between 0 and 99 (For Loop)

// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


// 2.9 Reverse a String with a For Loop

// const str = "Hello, world!";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// console.log(reversedStr); // Expected output: "!dlrow ,olleH"


// 2.10 Sum of the numbers in an array with a For Loop

// const array1 = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];
// const array2 = [6, 31, 39, 2, 47, 21, 37, 13, 50, 28, 14, 19, 32, 4, 42, 23, 15, 46, 12, 49];
// const array3 = [20, 26, 41, 8];

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray(array1)); // Expected output: sum of array1
// console.log(sumArray(array2)); // Expected output: sum of array2
// console.log(sumArray(array3)); // Expected output: sum of array3



// 2.11 Biggest number in an array with a For Loop

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(array1)); // Expected output: biggest number in array1
// console.log(findMax(array2)); // Expected output: biggest number in array2
// console.log(findMax(array3)); // Expected output: biggest number in array3


// 3. Functions
// 3.1 Find the Square

// function square(num) {
//   return num * num;
// }

// console.log(square(5));  // Expected output: 25
// console.log(square(10)); // Expected output: 100


// 3.2 Even or Odd?

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(4)); // Expected output: true
// console.log(isEven(7)); // Expected output: false


// 3.3 Max of Three

// function maxOfThree(a, b, c) {
//   return Math.max(a, b, c);
// }

// console.log(maxOfThree(5, 10, 3)); // Expected output: 10
// console.log(maxOfThree(7, 2, 8));  // Expected output: 8


// 3.4 Factorial

// function factorial(num) {
//   if (num === 0) return 1;
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5)); // Expected output: 120
// console.log(factorial(0)); // Expected output: 1


// 3.5 Sum of an Array of Numbers

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));  // Expected output: 10
// console.log(sumArray([5, 6, 7]));     // Expected output: 18






//DOM Practice Problems


// 1. Basic DOM Selection
// 1.1 Select an element with the ID “main-header” and change its text to “Updated Header.”


// const header = document.querySelector('#main-header');
// header.textContent = 'Updated Header';


// 1.2 Select the first <li> element in an unordered list.

// const firstListItem = document.querySelector('ul li');
// console.log(firstListItem); // logs the first <li> element


// 1.3 Select all elements with the class “highlight” and change their background color to yellow.

// const highlightElements = document.querySelectorAll('.highlight');
// highlightElements.forEach(element => {
//   element.style.backgroundColor = 'yellow';
// });


// 1.4 Select all paragraph elements and add the class “text-content” to them.

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//   paragraph.classList.add('text-content');
// });


// 1.5 Select all images on the page and log their src attributes.

// const images = document.querySelectorAll('img');
// images.forEach(img => {
//   console.log(img.src); // logs the src attribute of each image
// });


// 2. DOM Creation and Insertion
// 2.1 Create a new <div> element and add it to the end of the body.

// const newDiv = document.createElement('div');
// document.body.appendChild(newDiv); // Adds the new <div> at the end of the body


// 2.2 Create a button element with the text “Click Me” and insert it before an element with ID “target.”

// const button = document.createElement('button');
// button.textContent = 'Click Me';
// const targetElement = document.querySelector('#target');
// targetElement.parentNode.insertBefore(button, targetElement); // Inserts the button before the target element


// 2.3 Create an unordered list with 3 list items (your favorite foods) and append it to an element with ID “menu.”

// const ul = document.createElement('ul');
// const foods = ['Pizza', 'Burgers', 'Pasta'];

// foods.forEach(food => {
//   const li = document.createElement('li');
//   li.textContent = food;
//   ul.appendChild(li);
// });

// const menu = document.querySelector('#menu');
// menu.appendChild(ul); // Appends the list to the menu element


// 3. Event Handling
// 3.1 Add a click event listener to a button that toggles a “dark-mode” class on the body.

// const darkModeButton = document.querySelector('#dark-mode-button');
// darkModeButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });


// 3.2 Add an image to the page body every time the user clicks a button.

// const addImageButton = document.querySelector('#add-image-button');
// addImageButton.addEventListener('click', () => {
//   const img = document.createElement('img');
//   img.src = 'your-image-url.jpg'; // Replace with your image URL
//   img.alt = 'New Image';
//   document.body.appendChild(img);
// });


// 3.3 Create a button that, when clicked, changes the background color of the page to a random color.

// const changeColorButton = document.querySelector('#change-color-button');
// changeColorButton.addEventListener('click', () => {
//   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//   document.body.style.backgroundColor = randomColor;
// });


// 4. Dynamic Content
// 4.1 Create a todo list where users can add and remove items.


// const addButton = document.querySelector('#add-todo');
// const todoInput = document.querySelector('#todo-input');
// const todoList = document.querySelector('#todo-list');

// addButton.addEventListener('click', () => {
//   const todoText = todoInput.value;
//   if (todoText.trim() !== '') {
//     const li = document.createElement('li');
//     li.textContent = todoText;
    
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => {
//       li.remove();
//     });
    
//     li.appendChild(removeButton);
//     todoList.appendChild(li);
//     todoInput.value = ''; // Clear the input field after adding
//   }
// });



// 4.2 Implement a “read more” button that shows hidden text.

// const readMoreButton = document.querySelector('#read-more-button');
// const hiddenText = document.querySelector('#hidden-text');

// readMoreButton.addEventListener('click', () => {
//   hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
//   readMoreButton.textContent = hiddenText.style.display === 'none' ? 'Read More' : 'Read Less';
// });


// 4.3 Show and hide a div when a button is clicked (like the hamburger menu we made in class).

// const toggleMenuButton = document.querySelector('#toggle-menu-button');
// const menuDiv = document.querySelector('#menu-div');

// toggleMenuButton.addEventListener('click', () => {
//   menuDiv.style.display = menuDiv.style.display === 'none' ? 'block' : 'none';
// });


// 5. Data and DOM Integration
// 5.1 Display Books

// const books = [
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, cover: 'hobbit.jpg' },
//   { title: 'Dune', author: 'Frank Herbert', year: 1965, cover: 'dune.jpg' },
//   { title: 'Foundation', author: 'Isaac Asimov', year: 1951, cover: 'foundation.jpg' }
// ];

// function displayBooks(books) {
//   const bookContainer = document.querySelector('#book-container');
//   books.forEach(book => {
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card');
    
//     const img = document.createElement('img');
//     img.src = book.cover;
//     img.alt = book.title;
    
//     const title = document.createElement('h3');
//     title.textContent = book.title;
    
//     const author = document.createElement('p');
//     author.textContent = `By: ${book.author}`;
    
//     const year = document.createElement('p');
//     year.textContent = `Published: ${book.year}`;
    
//     bookCard.appendChild(img);
//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(year);
//     bookContainer.appendChild(bookCard);
//   });
// }

// displayBooks(books); // Call the function to display the books


// 5.2 Image Gallery

// const gallery = [
//   { url: 'nature1.jpg', caption: 'Mountain Lake', tags: ['nature', 'water'] },
//   { url: 'nature2.jpg', caption: 'Forest Path', tags: ['nature', 'trees'] },
//   { url: 'city1.jpg', caption: 'City Skyline', tags: ['urban', 'night'] }
// ];

// function displayGallery(gallery) {
//   const galleryContainer = document.querySelector('#gallery-container');
//   gallery.forEach(image => {
//     const imageCard = document.createElement('div');
//     imageCard.classList.add('image-card');
    
//     const img = document.createElement('img');
//     img.src = image.url;
//     img.alt = image.caption;
    
//     const caption = document.createElement('p');
//     caption.textContent = image.caption;
    
//     imageCard.appendChild(img);
//     imageCard.appendChild(caption);
//     galleryContainer.appendChild(imageCard);
//   });
// }

// displayGallery(gallery); // Call the function to display the images




//LAST YEAR EXAM

//PART 1
// async function getBusinesses(search_term, location, num_results) {
//     const url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data.businesses; // Return the list of businesses
//     } catch (error) {
//         console.error('Error fetching businesses:', error);
//         return []; // In case of an error, return an empty array
//     }
// }

// Example of how to test the function


// getBusinesses("breakfast", "Asheville, NC", 3).then(businesses => {
//     console.log(businesses);  // This will log the list of businesses
// });





//PART 2
// function businessToHTML(business) {
//     const name = business.name || 'No name available';
//     const address = business.location ? business.location.address1 : 'No address available';
//     const image = business.image_url || '';
//     const rating = business.rating || 'No rating available';
//     const price = business.price || '';
//     const reviews = business.review_count || 0;

//     return `
//         <div class="business">
//             <h2>${name}</h2>
//             <p>${address}</p>
//             <img src="${image}" alt="${name}" />
//             <p>Rating: ${rating}</p>
//             <p>Price: ${price}</p>
//             <p>Reviews: ${reviews}</p>
//         </div>
//     `;
// }

// // Example of how to test the function
// const business = {
//     name: 'Best Breakfast',
//     location: { address1: '123 Maple St, Asheville, NC' },
//     image_url: 'https://example.com/image.jpg',
//     rating: 4.5,
//     price: '$$',
//     review_count: 120
// };

// const businessHTML = businessToHTML(business);
// console.log(businessHTML);  // Logs the generated HTML string
