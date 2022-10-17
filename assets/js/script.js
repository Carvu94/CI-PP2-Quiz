document.addEventListener("DOMContentLoaded", function() {
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