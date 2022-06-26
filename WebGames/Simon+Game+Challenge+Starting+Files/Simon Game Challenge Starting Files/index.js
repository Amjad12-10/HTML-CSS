var gamepattern = [];
var userClickedPatterns = [];
var buttoncolors = ["red", "blue", "green", "yellow"];
var Level = 0;

// any key input
$(document).keypress(function(){
    $("h1").text("LEVEL "+Level);
    nextsequence();
});

// function for button click
$(".btn").click(function(){
    
    var userchoosencolor = $(this).attr("id");
    userClickedPatterns.push(userchoosencolor);

// sound input
playSound(userchoosencolor);

//Animate
animtePress(userchoosencolor);

// Anwer Check
checkanswer(userClickedPatterns.length-1);
})

// function for next pattern click
function nextsequence(){

// level text set
Level++;
$("h1").text("LEVEL "+Level);

userClickedPatterns = [];

// getting random number
var randomNumber = Math.floor(Math.random() * 4);
var randomchosencolor = buttoncolors[randomNumber];
gamepattern.push(randomchosencolor);
var btn = $("."+randomchosencolor);


// fade animation 
btn.fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

// sound input
playSound(randomchosencolor);

//Animate
animtePress(randomchosencolor);
}

// function for sound output
function playSound(colorname){

    var audio = new Audio("sounds/"+colorname+".mp3");
    audio.play();
}

// function for animation
function animtePress(colorname){

    $("#"+colorname).addClass("pressed");
    setTimeout(function() {
        $("#"+colorname).removeClass("pressed");
}, 100);
}

// function for checkanswer
function checkanswer(currentlevel){
if(gamepattern[currentlevel] === userClickedPatterns[currentlevel]){
    console.log("success");
    if(gamepattern.length == userClickedPatterns.length){
        setTimeout(function(){
            nextsequence();
        },1000)
    }
}
else{
    console.log("fail");
    resetGame();
    var gameover = new Audio("sounds/wrong.mp3");
    gameover.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200)
    $("h1").text("Game Over, Press Any Key to Restart");

}
}

// function for startover
function resetGame(){
    Level = 0;
    gamepattern = [];
    userClickedPatterns = [];
}