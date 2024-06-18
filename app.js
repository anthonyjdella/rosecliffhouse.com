// Function to load HTML content
function loadContent(url) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("app").innerHTML = data;
        })
        .catch((error) => console.error("Error loading content:", error));
}

// Simple client-side routing
const routes = {
    "/": "index.html",
    "/guest": "guest.html",
};

// Load the initial content based on the current URL
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    loadContent(routes[path] || "index.html");
});

// Handle back/forward navigation
window.onpopstate = () => {
    const path = window.location.pathname;
    loadContent(routes[path] || "index.html");
};

// Function to handle navigation programmatically
function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    loadContent(routes[path]);
}

// Example: load content for current path
const initialPath = window.location.pathname;
if (routes[initialPath]) {
    loadContent(routes[initialPath]);
}
