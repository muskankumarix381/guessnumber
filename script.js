(()=>{

const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const result= document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const submitBtn = document.querySelector('.submit-btn');
const startGameBtn = document.querySelector('.start-game');

const allGuessArray = [];
 let RandomValue = Math.round(Math.random()*100);

 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
   // console.log( "submitted");
    if(userInputValue<RandomValue){
        //console.log("Too low");
        result.innerText = 'Too low!';
    }
    else if(userInputValue>RandomValue){
        // console.log("Too high");
        result.innerText = 'Too high!';
    }
    else {
      //  console.log("Congrats");
        result.innerText = 'Congrats';
        startGameBtn.disabled=false;
        submitBtn.disabled=true;

    }
    allGuessArray.push(userInputValue);
    allGuesses.innerText = 'Your guesses: ' + allGuessArray.join(', ');
    form.reset();
 })


startGameBtn.addEventListener('click',()=>{
    allGuesses.innerText =" ";
    result.innerText =" ";
    startGameBtn.disabled=true;
    submitBtn.disabled=false;
    RandomValue = Math.round(Math.random()*100);
})
})()