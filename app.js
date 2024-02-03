let color = ["purple","pink","brown","lightsalmon"];
let userSeq = [];
let gameSeq = [];
let i=0;
let start = false;
let body = document.querySelector("body");
let h2 = document.querySelector("h2");


body.addEventListener("keypress",function(){
  if(!start){
    levelup();
    start = true;
  }
});
function levelup(){
  //random btn choose
  i++;
  userSeq = [];
  h2.innerText = `level ${i}`;
  let random = Math.floor(Math.random()*4);
  let btn = document.querySelector(`.${color[random]}`);
  gameSeq.push(btn.getAttribute("id"));
  gameBtnFlash(btn);
}
function gameBtnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){ btn.classList.remove("flash");},150);
}
function userBtnFlash(btn){
  btn.classList.add("flash1");
  setTimeout(function(){ btn.classList.remove("flash1");},150);
}
let boxes = document.querySelectorAll(".box");
for(box of boxes){
  box.addEventListener("click",btnPress);
}
function btnPress(){
  userBtnFlash(this);
  userSeq.push(this.getAttribute("id"));
  check(userSeq.length-1);
}

function check(idx){
  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelup,1000);
    }
  }
  else{
    h2.innerHTML = `Game Over! Score: <b>${i*10}</b> press any key again to restart`;
    reset();
  }
}

function reset(){
  start = false;
  gameSeq = [];
  userSeq = [];
  i = 0;
}