document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });
    console.log(userData); // You can replace this with sending the data to a server
  });