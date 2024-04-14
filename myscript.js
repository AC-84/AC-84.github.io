var box = document.getElementById("box");
var score = document.getElementById("score");
var points = 0;

box.addEventListener("click", function() {
  points++;
  score.innerHTML = points;
  var randomTop = Math.floor(Math.random() * 400);
  var randomLeft = Math.floor(Math.random() * 600);
  box.style.top = randomTop + "px";
  box.style.left = randomLeft + "px";
});

setInterval(function() {
  var randomTop = Math.floor(Math.random() * 400);
  var randomLeft = Math.floor(Math.random() * 600);
  box.style.top = randomTop + "px";
  box.style.left = randomLeft + "px";
}, 1000);
