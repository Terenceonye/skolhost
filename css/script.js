
// show or hide password
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.textContent = "🙈"; // Change icon to 'hide' state
    } else {
        passwordField.type = "password";
        togglePassword.textContent = "👁️"; // Change icon to 'show' state
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showNextSlide() {
        // Remove active class from the current slide
        slides[currentSlide].classList.remove("active");

        // Calculate the next slide index
        let nextSlide = (currentSlide + 1) % slides.length;

        // Show the next slide
        slides[nextSlide].classList.add("active");

        // Move the slides container to the next slide
        document.querySelector(".slides").style.transform = `translateX(-${nextSlide * 100}%)`;

        // Update the current slide index
        currentSlide = nextSlide;
    }

    // Start the slide show
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
