
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
