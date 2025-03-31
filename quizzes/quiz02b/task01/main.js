const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, role: "admin" },
    { id: 2, name: "Bob", age: 30, isActive: false, role: "user" },
    { id: 3, name: "Charlie", age: 22, isActive: true, role: "moderator" },
    { id: 4, name: "David", age: 35, isActive: true, role: "user" },
    { id: 5, name: "Eve", age: 28, isActive: false, role: "admin" },
    { id: 6, name: "Frank", age: 40, isActive: true, role: "moderator" },
];

// 1.1. Use map to create an array of names from the users array.
//      Then output the array of names to the console.

  users.map(getFullName);
  
  function getFullName(item) {
    return [item.name];
  }

  console.log(users);

//   justName = users.map( author =>  { return `${users.name}` } );
//   console.log(users);

//Come back to if I have time


// 1.2. Use filter to create an array of only active users from the users array.
//      Then output the array of active users to the console.

const filter_users = users.filter(function(users){
    return users.isActive == true; 
});

console.log(filter_users);


