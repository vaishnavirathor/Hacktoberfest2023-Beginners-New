document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = {};
    formData.forEach((value, key) => {
      loginData[key] = value;
    });
    console.log(loginData); // You can replace this with your login logic
  });