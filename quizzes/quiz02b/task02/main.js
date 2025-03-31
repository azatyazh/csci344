const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaArticle(WesternCarolina) {
    const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Western Carolina", {

    });
    const data = await response.json();
    console.log(data);
}

function dataToHTML(wikiArticle) {
    const  = testGetWikipediaArticles.western;

    return `
        <section class="card">
            <img src="https://picsum.photos/150">
            <div>
                <h2>Title of Wikipedia Page</h2>
                    Information from the "extract_html" data field
            </div>
        </section>
    `;
    // i know i would have to modify html with ${}
}




// Uncomment these functions when you're ready to test:
 testGetWikipediaArticles(); // Part A
// testDisplayArticles(); // Part B





// Please do not modify the testGetWikipediaArticles() function
async function testGetWikipediaArticles() {
    const western = await getWikipediaArticle("Western Carolina University");
    const unca = await getWikipediaArticle("UNC Asheville");
    const app = await getWikipediaArticle("Appalachian State");
    const charlotte = await getWikipediaArticle("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

// Please do not modify the testDisplayArticles() function
async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testGetWikipediaArticles();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}
