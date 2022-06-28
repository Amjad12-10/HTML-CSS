// Getting Buttons
const Btns = document.querySelectorAll(".btn");
const Submit = document.querySelector(".Submit");
// Getting  Both Sections
const Rated = document.querySelector(".Rating");
const ThankYou = document.querySelector(".ThankYou");
// Getting Btns Count
const BtnCount = Btns.length;
const RatedStr = document.querySelector("h4");

var RatedNumber = 0;

// Just a Print function
function print(str){
    console.log(str);
}
// Getting the Active Btn
for(var i=0;i<BtnCount;i++){
    Btns[i].addEventListener("click",function(){
        Check(this.classList[1]);
    });
}
// Submit Btn
Submit.addEventListener("click",function(){
    if(RatedNumber>0)
    {
    ThankYou.classList.remove("hidden");
    Rated.classList.add("hidden");
    RatedStr.textContent = "You selected "+ RatedNumber+" out of 5";
    }
})
// Checking Number 
function Check(num)
{
    switch (num) {
        case "1":
            RatedNumber = 1;
            break;
        case "2":
            RatedNumber = 2;
            break;
        case "3":
            RatedNumber = 3;
            break;
        case "4":
            RatedNumber = 4;
            break;
        case "5":
            RatedNumber = 5;
            break;
        default:
            break;
    }
}
