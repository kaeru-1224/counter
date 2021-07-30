const down = document.querySelector(".down")
const up  = document.querySelector(".up")
const reset = document.querySelector(".reset")
const number = document.querySelector(".number")
let newnum= 0;

function changeColor(){
    if(newnum>0) {number.style.color='red';}
    else if (newnum==0){number.style.color='black';}
  else {number.style.color='blue';} }



function increaseNumber() {
    newnum+=1;
    number.innerText=newnum;
 changeColor();}
function resetNumber(){  
        newnum=0;  number.innerText=newnum;changeColor();}
function decreasNumber(){
        newnum-=1;number.innerText=newnum; changeColor();}   

up.addEventListener('click', increaseNumber)
reset.addEventListener('click',resetNumber)
down.addEventListener('click',decreasNumber)
