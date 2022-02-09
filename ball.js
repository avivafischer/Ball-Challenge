var positionX = 0;
var positionY = 0;
var velocity = 50;
var reverse = false;

// ball 1
function moveBall1() {
  var ball1 = document.getElementById("ball1");

  var Xmin = 0;
  var Xmax = 1350;

  if(reverse){
    positionX = positionX - velocity;
    ball1.style.left = positionX + "px";
  }else {
    positionX = positionX + velocity;
    ball1.style.left = positionX +"px";
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}

// ball 2
function moveBall2() {
  var ball2 = document.getElementById("ball2");

  var Xmin = 0;
  var Xmax = 1350;

  if(reverse){
    positionX = positionX - velocity;
    ball2.style.left = positionX + "px";
  }else {
    positionX = positionX + velocity;
    ball2.style.left = positionX +"px";
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}

// ball 3
function moveBall3() {
  var ball3 = document.getElementById("ball3");

  var Xmin = 0;
  var Xmax = 1350;

  if(reverse){
    positionX = positionX - velocity;
    ball3.style.left = positionX + "px";
  }else {
    positionX = positionX + velocity;
    ball3.style.left = positionX +"px";
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}

// ball 4
function moveBall4() {
  var ball4 = document.getElementById("ball4");

  var Xmin = 0;
  var Xmax = 1350;

  if(reverse){
    positionX = positionX - velocity;
    ball4.style.left = positionX + "px";
  }else {
    positionX = positionX + velocity;
    ball4.style.left = positionX +"px";
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}

// ball 5
function moveBall5() {
  var ball5 = document.getElementById("ball5");

  var Xmin = 0;
  var Xmax = 1350;

  if(reverse){
    positionX = positionX - velocity;
    ball5.style.left = positionX + "px";
  }else {
    positionX = positionX + velocity;
    ball5.style.left = positionX +"px";
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}



setInterval(moveBall1, 100);
setInterval(moveBall2, 100);
setInterval(moveBall3, 100);
setInterval(moveBall4, 100);
setInterval(moveBall5, 100);



