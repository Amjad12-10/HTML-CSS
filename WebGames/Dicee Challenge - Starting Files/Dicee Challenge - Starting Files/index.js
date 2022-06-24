var random_1 = Math.floor(Math.random()*6)+ 1;
var random_2 = Math.floor(Math.random()*6)+1;

var Umpire = "";
if(random_1>random_2){
    Umpire = "Player 1 Wins"
}
else if(random_2>random_1)
{
    Umpire = "Player 2 Wins"
}
else if(random_1===random_2)
{
    Umpire = "DRAW";
}

var imgpath1 = "images/dice"+random_1+".png";
var imgpath2 = "images/dice"+random_2+".png";

document.querySelector("h1").textContent = Umpire;
document.querySelector(".img1").setAttribute("src",imgpath1);
document.querySelector(".img2").setAttribute("src",imgpath2);