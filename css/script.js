document.addEventListener("DOMContentLoaded", function () {
    // Select all necessary elements
    const introContents = document.querySelectorAll(".intro-content1, .intro-content2");
    const nextButton = document.querySelector(".next");
    const skipButton = document.querySelector(".skip");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
    const navMenu = document.querySelector("nav"); // Select the navigation menu

    let currentIndex = 0; // Start with the first content

    // Function to show the current intro content and hide others
    function showIntroContent(index) {
        introContents.forEach((content, idx) => {
            if (idx === index) {
                content.style.display = "block";
                AOS.refresh(); // Refresh AOS after showing new content
            } else {
                content.style.display = "none";
            }
        });
    }

    // Function to show or hide the navigation menu
    function toggleNavMenu(show) {
        navMenu.style.display = show ? "block" : "none";
    }

    // Initialize by showing the first content and hiding the nav menu
    showIntroContent(currentIndex);
    toggleNavMenu(false);

    // Event listener for the next button
    nextButton.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= introContents.length) {
            document.querySelector("#section1").classList.add("active");
            document.querySelector("#intro1").classList.remove("active");
            toggleNavMenu(true); // Show the nav menu when skipping intro
        }
        showIntroContent(currentIndex);
    });

    // Event listener for the skip button
    skipButton.addEventListener("click", function () {
        document.querySelector("#section1").classList.add("active");
        document.querySelector("#intro1").classList.remove("active");
        toggleNavMenu(true); // Show the nav menu when skipping intro
    });

    // Add click event to each nav link for navigation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target section ID from data attribute
            var targetId = this.getAttribute("data-target");

            // Hide all sections and remove active class
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Show the target section
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Initialize AOS library
    AOS.init({
        offset: 200,
        once: true,
    });

    // Ensure AOS animations refresh after any dynamic changes
    AOS.refresh();
});
