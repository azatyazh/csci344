const getMeteors = async (startDate, endDate) => {
    const rootURL = "https://api.nasa.gov/neo/rest/v1/feed";
    const apiKey = "Nkm2F2D17dlqJlgMgpodpiFiL0rNgecSNa6cZKYu";
    const endpoint = `${rootURL}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    return jsonData;
};

// meteors
async function main() {
    const data = await getMeteors("2025-03-01", "2025-03-02");
    console.log(data);
}


/**
 * Exercise:
 *      1. How would I access all of the meteors from '2024-10-08'?
 *      2. How would I print all the names of all the meteors?
 *
 */





// const getMeteors = async (startDate, endDate) => {
//     const rootURL = "https://api.nasa.gov/neo/rest/v1/feed";
//     const apiKey = "Nkm2F2D17dlqJlgMgpodpiFiL0rNgecSNa6cZKYu";
//     const endpoint = `${rootURL}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
//     const response = await fetch(endpoint);
//     const jsonData = await response.json();
//     return jsonData;
// };

// // meteors
// async function main() {
//     const data = await getMeteors("2025-03-01", "2025-03-02");
//     console.log(data);

//     // 1. Access all the meteors from '2024-10-08':
//     console.log("Meteors on 2024-10-08:");
//     const meteorsOnDate = data.near_earth_objects["2024-10-08"];
//     if (meteorsOnDate) {
//         console.log(meteorsOnDate);
//     } else {
//         console.log("No meteors found on 2024-10-08.");
//     }

//     // 2. Print all meteor names
//     let meteorList = [];
//     for (const key in data.near_earth_objects) {
//         meteorList = meteorList.concat(data.near_earth_objects[key]);
//     }
    
//     console.log("All Meteor Names:");
//     meteorList.forEach((meteor) => console.log(meteor.name));
// }

// // Call the main function
// main();


// Accessing meteors for a specific date:

// In main(), we access the meteors on 2024-10-08 using data.near_earth_objects["2024-10-08"]. If the date exists in the near_earth_objects data, it will return an array of meteor objects.

// Printing all meteor names:

// First, we create an empty array meteorList to store all meteors across different dates.

// Then, we loop through the data.near_earth_objects using for...in and concatenate all the meteors from each date into meteorList.

// Finally, we loop over meteorList and print the name of each meteor using forEach().

// Expected Output:
// Meteors on '2024-10-08':

// This will print an array of meteor objects for that date, if any meteors are available.

// All Meteor Names:

// This will print all the meteor names from the date range you've provided in the getMeteors() function call (2025-03-01 to 2025-03-02).


// Answers:
// 1. all of the meteors from '2024-10-08'
// console.log(data.near_earth_objects["2024-10-08"]);

// 2. output all meteor names
// create a list of all of the meteors:
// let meteorList = [];
// for (const key in data.near_earth_objects) {
//     meteorList = meteorList.concat(data.near_earth_objects[key]);
// }
// meteorList.forEach((meteor) => console.log(meteor.name));
