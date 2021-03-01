//1
var consoleClic = document.getElementsByTagName("footer");

var clic = 1;

for (i = 0; i < consoleClic.length; i++) {
  consoleClic[i].addEventListener("click", function f(){ 
  console.log(`clique No + ${clic++}`);
});
};

//2
var togg = document.getElementsByClassName("navbar-toggler");

togg[0].addEventListener("click", function fu(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

//3
var botn = document.getElementsByClassName("btn-outline-secondary");

botn[0].addEventListener("click", function fun () {
  document.getElementsByClassName("card-text")[0].style.color = "red";
});

//4
var botn = document.getElementsByClassName("btn-outline-secondary");

botn[1].addEventListener("click", function func () {
  if (document.getElementsByClassName("card-text")[1].style.color === 'green'){
    document.getElementsByClassName("card-text")[1].style.color = 'black' ;
    }
  else {
    document.getElementsByClassName("card-text")[1].style.color = 'green'
  }
});

//5
var lunk = document.getElementsByTagName("link");
var nav = document.getElementsByClassName("navbar")

nav[0].addEventListener("dblclick", function funct () {
  document.styleSheets[0].disabled = true|false;
});

  if (document.styleSheets[0].disabled === false) {
    document.getElementsByTagName("body")[0].addEventListener("dblclick", function functi () {
      document.styleSheets[0].disabled = false|true})};