// Set the date we're counting down to
window.scrollTo(-500, 0);

// Set the date we're counting down to
var endDate = new Date("Jul 6, 2023 17:14:00").getTime();

// Disable the anchor tag initially
var anchorTag = document.getElementById("candleClick");
anchorTag.style.pointerEvents = "none";

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = endDate - now;

  // If the countdown is over, set countdown values to 0:0:0:0 and enable the anchor tag
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("daysNum").innerHTML = "00";
    document.getElementById("hoursNum").innerHTML = "00";
    document.getElementById("minsNum").innerHTML = "00";
    document.getElementById("secsNum").innerHTML = "00";
    document.getElementById("text").innerHTML = "HAPPY BIRTHDAY SRAVANTI! <br>Oyy pilla candle meedha click chey!";
    anchorTag.style.pointerEvents = "auto";
    // setTimeout(function() {
    //     window.location.href = '/'; 
    //   }, 5000);
       // Adjust the delay time (in milliseconds) before redirection
    // Display the custom alert
    // showCustomAlert();
  } else {
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with id="cdHour/cdMin/cdSec"
    document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);
  }
}, 1000);

// Close the custom alert when the close button is clicked
document.getElementById("closeAlert").addEventListener("click", closeCustomAlert);
