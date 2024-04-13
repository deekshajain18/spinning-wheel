document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Login attempt with username:', username, 'and password:', password);
    // Here you would typically send a request to your server to authenticate the user
  });
  
  function register() {
    console.log('Redirect to registration page');
    window.location.href = "register.html";
    // Redirect user to registration page or show registration form
  }
  
  function forgotPassword() {
    console.log('Redirect to forgot password page');
  
  }
  function redirecttournament() {
    console.log('Redirecting to login page');
    window.location.href = "tournament.html"; // Change the URL to your login page
}