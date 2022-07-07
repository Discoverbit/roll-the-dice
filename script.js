
var dice =  Math.random()*6;
dice = Math.round(dice) + 1;

var dice2 =  Math.random()*6;
dice2 = Math.round(dice2) + 1;

var randomdicenumber = "images/dice" + dice + ".png";

var randomdicenumber2 = "images/dice" + dice2 + ".png";

var play1 = document.querySelectorAll("img")[0];

play1.setAttribute("src", randomdicenumber);

var play2 = document.querySelectorAll("img")[1];

play2.setAttribute("src", randomdicenumber2);


if(randomdicenumber > randomdicenumber2){

  document.querySelector("h1").innerHTML = "🎁Player 1 Wins🎁";
} 
else if(randomdicenumber == randomdicenumber2){

  document.querySelector("h1").innerHTML = "It Is A Draw Game😛"; 
}
else{

  document.querySelector("h1").innerHTML = "🎁Player 2 Wins🎁";
  
}
