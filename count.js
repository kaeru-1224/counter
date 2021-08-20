/*const down = document.querySelector(".down")
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
        renderNumber(newNum)}
up.addEventListener('click', ()=> setNumber(nowNum+=1))
reset.addEventListener('click',()=>setNumber(0))
down.addEventListener('click',()=>setNumber(nowNum-=1))*/

//contain을 이용(튜토리얼참조)

const btnAll= document.querySelectorAll(".btn")
const number = document.querySelector(".number")
let nowNum=0; 
//버튼전체가 array 형태로 나오므로 각각의 버튼을 이용해
//주기위해  forEach를 이용 

function changeColor(newNum){
  if(newNum>0) {number.style.color='red';}
  else if (newNum==0){number.style.color='black';}
else {number.style.color='blue';} }

btnAll.forEach(item => {
  item.addEventListener('click',
  ()=>{
  //classList를 이용해서 클래스 유무를 통해서 수를 증가감소
    let btn= item.classList;
    if(btn.contains("up")){
      nowNum++;}
      else if(btn.contains("reset")){
        nowNum=0;
      }else{nowNum--}
      changeColor(nowNum);
      number.innerText=nowNum;
      })})
  
     
  
 



  

