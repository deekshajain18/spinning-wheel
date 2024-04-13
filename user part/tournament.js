window.onload = function () {
    var tournaments = document.querySelectorAll('.tournament');

    tournaments.forEach(function(tournament, index) {
        var countdown = tournament.querySelector('.countdown-timer');
        startCountdown(countdown, index);
    });

    // Dummy function to simulate joining the tournament
    
};

function startCountdown(display, index) {
    var fiveMinutes = 5 * 60; // Change to the duration of your tournament countdown
    var timer = fiveMinutes;
    setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = fiveMinutes;
        }
    }, 1000);
}
function join() {
    window.location.href = "spin.html";
    // Redirect user to registration page or show registration form
  }
  function back() {
    window.location.href = "register.html";
    // Redirect user to registration page or show registration form
  }
  function draw() {
    window.location.href = "withdraw.html";
    // Redirect user to registration page or show registration form
  }
  