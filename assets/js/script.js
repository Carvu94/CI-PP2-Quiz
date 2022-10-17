let startButton = document.getElementById("start");
let homepageContainer = document.getElementById("homepage-container");
let categories = document.getElementById("category-pick");


// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // JS code for modal window and close mostly taken from W3 Schools from: https://www.w3schools.com/howto/howto_css_modals.asp
    // Modal window opens when user selects 'About us' button
    let aboutUsModal = document.getElementById("about-us-modal");
    let aboutUsButton = document.getElementById("info-button");
    let closeButton = document.getElementsByClassName("close")[0];

    aboutUsButton.addEventListener("click", function() {
        aboutUsModal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        aboutUsModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == aboutUsModal) {
            aboutUsModal.style.display = "none";
        }
    });

});

// When user selects 'Start the Quiz' categories will be listed

startButton.addEventListener("click", function() {
    homepageContainer.style.display = "none";
    categories.style.display = "block";
});