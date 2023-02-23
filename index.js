let initialValue=100;
let score=null;
let random=generateRandomNumber(100);
function generateRandomNumber(max){
    return Math.floor(Math.random()*max)+1;
}
document.querySelector("#check").addEventListener("click",check);
function check(){
    let userInput=document.getElementById("userInput").value;
    if(initialValue!==0){
    if(userInput>random){
        document.querySelector(".message").innerText="YOUR GUESS IS HIGH  🥱😛";
        initialValue--;
        document.querySelector("#chance").innerText=initialValue;
    }
    else if(userInput<random){
        document.querySelector(".message").innerText="YOUR GUESS IS LOW  😐😕";
        initialValue--;
        document.querySelector("#chance").innerText=initialValue;
    }
    else{
        document.querySelector(".message").innerText="😍🤩WINNER WINNER CHIKEN DINNER😍🤩";
        document.querySelector("#score").innerText=initialValue;
        document.body.style.backgroundColor="green";
        document.querySelector(".number").innerText=random;
    }
}
else{
    document.querySelector(".message").innerText="GAME OVER"
}
}
document.querySelector("#playagain").addEventListener("click",playAgain);
function playAgain(){
    document.querySelector(".message").innerText="START GUESSING . . .";
    document.querySelector("#chance").innerText="100";
    document.querySelector("#score").innerText="0";
    document.body.style.backgroundColor="black";
    document.querySelector(".number").innerText="?";
    document.querySelector("#userInput").value="";
}