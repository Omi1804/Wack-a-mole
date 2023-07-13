const squares=document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton=document.querySelector('.start')
const stopButton=document.querySelector('.stop')


let result=0;
let timerId=null
let hitPosition
let currentTime=60
let countDownTimerId = null;

function randomsquare()
{
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquare= squares[Math.floor(Math.random()*9)]; //generates the number between 0 to 8
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id==hitPosition)
        {
            result++
            score.textContent=result;
            hitPosition=null
        }
    })
})

function moveMole()
{
    startButton.disabled=true;
    timerId=setInterval(randomsquare,1000)
    countDownTimerId = setInterval(countDown, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
  
    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId)
      alert('Your total score is ' + result);
      startButton.disabled = false;

    }
  }
  



startButton.addEventListener('click',moveMole);
stopButton.addEventListener('click',function(){
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    startButton.disabled=false;
});