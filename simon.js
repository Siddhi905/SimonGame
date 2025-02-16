let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (!started) {
        console.log("Game is started");
        started = true;
         
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let n = Math.floor(Math.random() * 4); 
    let randomCol = btns[n];
    gameSeq.push(randomCol);
    console.log(gameSeq);
    let randbtn = document.querySelector(`.${randomCol}`);
    console.log(n, randomCol, randbtn);
    btnFlash(randbtn);
}
function checkAns(idx){
    console.log("curr level:",level);
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b>.<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}
function btnPress(){
    
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(bt of allbtns){
    bt.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}