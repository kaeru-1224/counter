const down = document.querySelector(".down")
const up  = document.querySelector(".up")
const reset = document.querySelector(".reset")
const number = document.querySelector(".number")
let nowNum=0; 
function changeColor(newNum){
    if(newNum>0) {number.style.color='red';}
    else if (newNum==0){number.style.color='black';}
  else {number.style.color='blue';} }


function renderNumber(newNum){
        number.innerText=newNum; 
          changeColor();}

function setNumber(newNum){
        nowNum = newNum;
        renderNumber(newNum)
}
up.addEventListener('click', ()=> setNumber(nowNum+=1))
reset.addEventListener('click',()=>setNumber(0))
down.addEventListener('click',()=>setNumber(nowNum-=1))