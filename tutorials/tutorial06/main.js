// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;

    console.log(searchTerm, openOnly);

    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
    return course.EnrollmentMax <= course.EnrollmentCurrent;
};

// Part 1.1b
const doesTermMatch = (course) => {

    let match = false; 

    if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
        match = true;
    }
    console.log(course.Title, searchTerm, match);
    return match;
    // instructior check 
    //if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())); {
    //    match = true;
    // }
};

// Part 1.2
const dataToHTML = (course) => {
    // modify this to be more detailed
    return `
        <section class="course">
            ${course.Code}
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:

    const container = document.querySelector(".courses");
    container.innerHTML = null;

    let matches = courseList.filter(doesTermMatch);

    matches.forEach((course) =>  {
        const snippet = dataToHTML(course);
        container.insertAdjacentHTML("beforeend", snippet);
        
    });
};
