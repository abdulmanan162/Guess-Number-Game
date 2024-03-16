'use strict';

// console.log(document.querySelector(".message").textContent)

// document.querySelector(".message").textContent="🎉Correct Number! "

// document.querySelector(".number").textContent="13"
// document.querySelector(".score").textContent="10"

// document.querySelector(".guess").value="23"
// console.log(document.querySelector(".guess").value)
let score= 20;
let highscore=0;
let secretnumber= Math.trunc(Math.random()*20)+1;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}


document.querySelector(".check").addEventListener("click", function(){
const guess= Number(document.querySelector(".guess").value)
console.log(guess, typeof guess);
// When there is no input 
if(!guess){
    // document.querySelector('.message').textContent="😒 No Number !"
    displayMessage("😒 No Number !")
} 
// When players win the game 
else if(guess === secretnumber){
    document.querySelector('.message').textContent="🎉Correct Number!"
    displayMessage("🎉Correct Number!")
document.querySelector('body').style.backgroundColor='#60b347'

document.querySelector('.number').style.width='30rem'
if(score>highscore){
    highscore=score;
    document.querySelector(".highscore").textContent=highscore;
}

document.querySelector(".number").textContent=secretnumber;
} 

else if(guess !== secretnumber){
    if(score>1){
        document.querySelector('.message').textContent= guess > secretnumber? "📈Number is Too High":"📉Number is Too Low";
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        // document.querySelector('.message').textContent="😒You Lost the game!"
        displayMessage("😒You Lost the game!")
        document.querySelector('.score').textContent=0;
    }
}


})


 /*

// When the guess is too High 

else if(guess>secretnumber){
 
if(score>1){
    document.querySelector('.message').textContent="📈Number is Too High"
    score--;
    document.querySelector('.score').textContent=score;
}else{
    document.querySelector('.message').textContent="😒You Lost the game!"
    document.querySelector('.score').textContent=0;
}
}
// When the guess is too Loww 

else if(guess<secretnumber){
    if(score>1){
        document.querySelector('.message').textContent="📉Number is Too Low"
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent="😒You Lost the game!"
        document.querySelector('.score').textContent=0;
    }
    
   }
*/
 

document.querySelector(".again").addEventListener("click", function(){
score= 20;
secretnumber= Math.trunc(Math.random()*20)+1;
// document.querySelector('.message').textContent="Start guessing... "
displayMessage("Start guessing...")
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent="?";
document.querySelector(".guess").value="";

document.querySelector('body').style.backgroundColor='#222'

document.querySelector('.number').style.width='15rem'

 

})