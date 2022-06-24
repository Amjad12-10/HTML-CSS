var DrumsCount = document.querySelectorAll(".drum").length;

// ----- Mouse Detect
for(var i=0;i<DrumsCount;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var ButtonCall = this.innerHTML;
        soundon(ButtonCall);
        _Animation(ButtonCall);
    });
}

// ----- Keyboard Detect

document.addEventListener("keydown",function(event) {
    var keyboardKey = event.key;
    soundon(keyboardKey);
    _Animation(keyboardKey);
})
function soundon(key)
{
    switch (key) {
        case "w":
            var newaudio = new Audio("sounds/crash.mp3");
            newaudio.play();    
            break;
        case "a":
            var newaudio = new Audio("sounds/kick-bass.mp3");
            newaudio.play();    
            break;
        case "s":
            var newaudio = new Audio("sounds/snare.mp3");
            newaudio.play();    
            break;
        case "d":
            var newaudio = new Audio("sounds/tom-1.mp3");
            newaudio.play();    
            break;
        case "j":
            var newaudio = new Audio("sounds/tom-2.mp3");
            newaudio.play();    
            break;
        case "k":
            var newaudio = new Audio("sounds/tom-3.mp3");
            newaudio.play();    
            break;
        case "l":
            var newaudio = new Audio("sounds/tom-4.mp3");
            newaudio.play();    
            break;                
        default:
            break;
    }
}
//---- Btn Active
function _Animation(keyClass){
    var ActiveBtn = document.querySelector("."+keyClass);
    ActiveBtn.classList.add("pressed");

    setTimeout(function (){ActiveBtn.classList.remove("pressed");},100);
}