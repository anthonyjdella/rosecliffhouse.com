// Function to load HTML content
function loadContent(url) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            console.log(`Loading content from ${url}`);
            document.getElementById("content").innerHTML = data;
        })
        .catch((error) => console.error("Error loading content:", error));
}

// Function to handle navigation
function navigateTo(url) {
    history.pushState(null, null, url);
    handleLocation();
}

// Function to handle location changes
function handleLocation() {
    const path = window.location.pathname;
    console.log(`Handling location: ${path}`);
    let contentUrl = "";

    switch (path) {
        case "/":
            contentUrl = "index.html";
            break;
        case "/guest":
            contentUrl = "guest.html";
            break;
        default:
            contentUrl = "index.html";
            break;
    }

    loadContent(contentUrl);
}

// Event listener for popstate (browser back/forward buttons)
window.addEventListener("popstate", handleLocation);

// Load initial content
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    handleLocation();
});
