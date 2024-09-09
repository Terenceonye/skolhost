
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






// DASHBOARD AND SLIDERS

// cURRENT TME ON SLIDER

// Function to display the date in the desired format without day suffix
function displayDate() {
    const myDate = document.getElementById('mydate');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0'); // Ensures 2 digits for day
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const weekday = days[currentDate.getDay()];

    const formattedDate = `${day} ${month}, ${year} | ${weekday}`;

    myDate.innerHTML = formattedDate;
}




// SLIDES AND SLIDER
document.addEventListener("DOMContentLoaded", function () {
    // display the calculated day
    displayDate()


    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");

    const slidesx = document.querySelectorAll(".slidex");
    const indicatorsx = document.querySelectorAll(".indicatorx")

    let currentSlide = 0;
    let currentSlidex = 0;

    function showNextSlide() {
        // Remove active class from the current slide and indicator
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");

        slidesx[currentSlidex].classList.remove("activex");
        indicatorsx[currentSlidex].classList.remove("activex");


        // Calculate the next slide index
        let nextSlide = (currentSlide + 1) % slides.length;
        let nextSlidex = (currentSlidex + 1) % slidesx.length;

        // Show the next slide
        slides[nextSlide].classList.add("active");
        indicators[nextSlide].classList.add("active");

        slidesx[nextSlidex].classList.add("activex");
        indicatorsx[nextSlidex].classList.add("activex");

        // Move the slides container to the next slide
        document.querySelector(".slides").style.transform = `translateX(-${nextSlide * 100}%)`;
        document.querySelector(".slidesx").style.transform = `translateX(-${nextSlidex * 100}%)`;

        // Update the current slide index
        currentSlide = nextSlide;
        currentSlidex = nextSlidex;
    }

    // Start the slide show
    setInterval(showNextSlide, 4000); // Change slide every 3 seconds

    // Add click event to indicators for manual navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            // Remove active class from current slide and indicator
            slides[currentSlide].classList.remove("active");
            indicators[currentSlide].classList.remove("active");

            // Set the new slide index
            currentSlide = index;

            // Show the clicked slide
            slides[currentSlide].classList.add("active");
            indicators[currentSlide].classList.add("active");

            // Move the slides container to the clicked slide
            document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    });

    indicatorsx.forEach((indicatorx, index) => {
        indicatorx.addEventListener("click", () => {
            // Remove active class from current slide and indicator
            slidesx[currentSlidex].classList.remove("activex");
            indicatorsx[currentSlidex].classList.remove("activex");

            // Set the new slide index
            currentSlidex = index;

            // Show the clicked slide
            slidesx[currentSlidex].classList.add("activex");
            indicatorsx[currentSlidex].classList.add("activex");

            // Move the slides container to the clicked slide
            document.querySelector(".slidesx").style.transform = `translateX(-${currentSlidex * 100}%)`;
        });
    });
});



// mobile menu - for active state

document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach(item => {
      item.addEventListener("click", function () {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove("active"));
  
        // Add active class to the clicked item
        this.classList.add("active");
      });
    });
  });
  