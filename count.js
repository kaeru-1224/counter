const down = document.querySelector(".down")
const up  = document.querySelector(".up")
const reset = document.querySelector(".reset")
const number = document.querySelector(".number")
let newnum= 0;

//문제사항? 1에서끝나는거
//while로 하는경우에는 수가 한없이 증가 하므로 x 
//클릭액션이 있으면증가👉ok그런데 그 증가한거에서 다시 증가가 안되는건
//왜일까,,?는 그냥  newnum을 밖에 안둬서 그런거엿어,ㅠㅠㅠㅠㅜ
//그런데 여기서 왜 안에다가 두면 이런일이 발생하는거지? 

function increaseNumber(){
    newnum+=1;
    number.innerText=newnum;
 }

up.addEventListener('click', increaseNumber)

function resetNumber(){
    newnum=0; 
    number.innerText=newnum;}

reset.addEventListener('click',resetNumber)

function decreasNumber(){
    newnum-=1;
    number.innerText=newnum;
}
down.addEventListener('click',decreasNumber)
