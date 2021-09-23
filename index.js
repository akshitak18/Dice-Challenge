
var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;


var newimg1="images/dice"+a+".png";
var newimg2="images/dice"+b+".png";


document.querySelector(".img1").setAttribute("src" , newimg1);
document.querySelector(".img2").setAttribute("src" , newimg2);

if(a>b){
  document.querySelector("h1").innerHTML="🚩Player1 Wins! ";
}

else
if(b>a){
  document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else
{
  document.querySelector("h1").innerHTML="DRAW!";
}
