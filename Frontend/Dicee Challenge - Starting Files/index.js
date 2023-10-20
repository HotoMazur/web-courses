// first dice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);
// second dice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);
// title
var title = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "🚩 Player 2 Wins!";
} else {
    title.innerHTML = "Draw!";
}