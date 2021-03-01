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
var navbar = document.getElementsByClassName("navbar");
var body = document.getElementsByClassName("col-sm-8");

navbar[0].addEventListener("dblclick", function menuToggle() {
    document.styleSheets[0].disabled = true | false;
});

body[0].addEventListener("dblclick", function menuToggle() {
    window.location.reload();
});

//6
var btnView = document.getElementsByClassName("btn-success");

for(let l = 0; l < btnView.length; l++){
btnView[l].addEventListener("mouseover", function MouseBtnView(e){ 
  
  if (document.getElementsByClassName("card-text")[l].classList.toggle("collapse") === false){
    document.getElementsByClassName("card-img-top")[l].style.width = "100%";
    
  } else {
    document.getElementsByClassName("card-img-top")[l].style.width = "20%";
  }
});
}

//7
let btnLoop = document.getElementsByClassName('btn btn-secondary my-2')[0];
let parentCard = document.getElementsByClassName('row')[1];

btnLoop.addEventListener('click', function() {
  parentCard.insertBefore(parentCard.lastElementChild, parentCard.firstElementChild)
});

//8
