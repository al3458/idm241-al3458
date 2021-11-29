var mainBobj = document.getElementById("mainB");
var allObj = document.getElementById("firstL");
var persObj = document.getElementById("personalizedB");
var noneObj = document.getElementById("noneB");
// var content = document.getElementById("menu");
var menuDown = false;
const sndAllObj = document.getElementById('allSound');
const sndNoneObj = document.getElementById('noneSound');

mainBobj.addEventListener("click", function(){
//    alert('button clicked');
  if(menuDown == false){
    document.getElementById("menu").style.transform = "none";
    document.getElementById("menu").style.animation="fadein 0.5s linear";
    document.getElementById("menu").style.opacity="1";
    menuDown = true;
  } else {
    document.getElementById("menu").style.transform = "translate(0, -100%)";
    document.getElementById("menu").style.animation="fadeout 0.5s linear";
    document.getElementById("menu").style.opacity="0";
    menuDown = false;
  }
});

function change(){
  var image = document.getElementById("mainB");
  image.src = "allBell.png";
  sndAllObj.play();
  document.getElementById("menu").style.transform = "translate(0, -100%)";
  document.getElementById("menu").style.animation="fadeout 0.5s linear";
  document.getElementById("menu").style.opacity="0";
  menuDown = false;
}

function change2(){
  var image = document.getElementById("mainB");
  image.src = "newBell1.png";
  document.getElementById("menu").style.transform = "translate(0, -100%)";
    document.getElementById("menu").style.animation="fadeout 0.5s linear";
    document.getElementById("menu").style.opacity="0";
    menuDown = false;
}

function change3(){
  var image = document.getElementById("mainB");
  image.src = "noneBell.png";
  sndNoneObj.play();
  document.getElementById("menu").style.transform = "translate(0, -100%)";
    document.getElementById("menu").style.animation="fadeout 0.5s linear";
    document.getElementById("menu").style.opacity="0";
    menuDown = false;
}

// function woop() {
//   document.getElementById("mainB").style.animation =  "pulse-animation 1s";
// }

// const woop = document.getElementById("mainB").style.animation =  "pulse-animation 1s";
// function play() {
//   var audio = document.getElementById("audio");
//   audio.play();
// }



// mainObj.addEventListener("click", function(){
//   box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
//   transform: scale(1);
//   animation: pulse 2s;
// });