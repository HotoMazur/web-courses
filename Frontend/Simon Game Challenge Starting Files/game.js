let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0

let randomChosenColor = buttonColours[nextSequence()];
gamePattern.push(randomChosenColor);

function nextSequence() {
    $("#level-title").text("Level " + ++level)
    return Math.floor(Math.random() * 4);
}

function playSounds(color){
    new Audio("./sounds/" + color + ".mp3").play();
}

function animatedPress(currentColor){
    $("#" + currentColor).addClass(".pressed");
    setTimeout(function () {$("#" + currentColor).removeClass(".pressed");},  100)
}

$(".start-button").click(function () {


    for (let i = 0; i < gamePattern.length; i++) {
        $("." + gamePattern[i]).fadeOut(200).fadeIn(200);
        playSounds(gamePattern[i]);
    }

    $(".btn").click(function (event){
        let color = event.target.attributes.id.nodeValue;
        userClickedPattern.push(color);
        playSounds(color);
        animatedPress(color);
        checkAnswer(level);
    })
});

function checkAnswer(currentLevel){
    if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)){
        setTimeout(function (){nextSequence()}, 1000);
        userClickedPattern = [];
        return true;
    } else {
        return false;
    }
}