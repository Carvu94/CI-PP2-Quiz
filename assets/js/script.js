let startButton = document.getElementById("start");
let homepageContainer = document.getElementById("homepage-container");
let categories = document.getElementById("category-pick");
let questionArea = document.getElementById("question-area");
let allergensCategory = document.getElementById("allergens");
let haccpCategory = document.getElementById("haccp");
let healthAndSafetyCategory = document.getElementById("health-and-safety");
let dietsCategory = document.getElementById("diets");

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

// When user select the Allergens category the quiz will start with Allergens questions
allergensCategory.addEventListener("click", function() {
    categories.style.display = "none";
    questionArea.style.display = "block";
});

// When user select the HACCP category the quiz will start with HACCP questions
haccpCategory.addEventListener("click", function() {
    categories.style.display = "none";
    questionArea.style.display = "block";
});

// When user select the Health & Safety category the quiz will start with Health & Safety questions
healthAndSafetyCategory.addEventListener("click", function() {
    categories.style.display = "none";
    questionArea.style.display = "block";
});

// When user select the Diets category the quiz will start with Diets questions
dietsCategory.addEventListener("click", function() {
    categories.style.display = "none";
    questionArea.style.display = "block";
});