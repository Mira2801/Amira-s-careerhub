var button = document.getElementById("myButton")
var homePage = document.getElementById("homePage")
var menuPage = document.getElementById("menuPage")

button.onclick = function() {
  homePage.style.display = "none";  
  menuPage.style.display = "block";  
}

var button = document.getElementById("myButton");
var homePage = document.getElementById("homePage");
var menuPage = document.getElementById("menuPage");
var backButton = document.getElementById("backButton");

button.onclick = function() {
  homePage.style.display = "none";    
  menuPage.style.display = "block";   
  backButton.style.display = "inline-block"; 
}

backButton.onclick = function() {
  menuPage.style.display = "none";    
  homePage.style.display = "block";   
}
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();
