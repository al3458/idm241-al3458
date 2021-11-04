var mainBobj = document.getElementById("mainB");
// var content = document.getElementById("menu");
var menuDown = false;

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