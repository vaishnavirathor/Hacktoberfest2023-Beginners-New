document.getElementById("reset-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const email = document.getElementById("email").value;
    
    // In a real scenario, you would send a request to your server to handle the password reset email
    // For this example, we'll just show an alert
    alert(`A password reset link has been sent to ${email}`);
});