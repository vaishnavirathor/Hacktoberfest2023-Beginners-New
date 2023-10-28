function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  }
  
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const forgotPasswordForm = document.getElementById("forgot-password-form");
  
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = {};
    formData.forEach((value, key) => {
      loginData[key] = value;
    });
    console.log("Login Data:", loginData);
  });
  
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const signupData = {};
    formData.forEach((value, key) => {
      signupData[key] = value;
    });
    console.log("Signup Data:", signupData);
  });
  
  forgotPasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const forgotPasswordData = {};
    formData.forEach((value, key) => {
      forgotPasswordData[key] = value;
    });
    console.log("Forgot Password Data:", forgotPasswordData);
  });