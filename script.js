
let score=0;
let cross=true;
let gameoverAudio=new Audio('gameover.mp3');
let gameMusic= new Audio('music.mp3');

setTimeout(()=>{
    gameMusic.play();
},1000);

document.addEventListener('keydown', function(event) {
    console.log("Key pressed:", event.key);
    if(event.key==="ArrowUp"){
        dino=document.querySelector('.Dino');
        dino.classList.add('animateDino');

        setTimeout(()=>{
            dino.classList.remove('animateDino');
        } , 700);
    }

    if(event.key==="ArrowLeft"){
        
        posX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left= posX - 112+"px";
    }

    if(event.key==="ArrowRight"){
        
        posX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left= posX + 112+"px";
    }
});

setInterval(()=>{
dino=document.querySelector('.Dino');
obstacle=document.querySelector('.obstacle');
gameover=document.querySelector('.gameOver');
dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetX=Math.abs(dx-ox);
offsetY=Math.abs(dy-oy);
if(offsetX<65 && offsetY<45){
    gameMusic.pause();
    gameoverAudio.play();
    setTimeout(()=>{
        gameoverAudio.pause();
    },1000);
    cross=false;
    score--;
    updateScore(score);
    gameover.innerHTML="Game Over - Reload to start";
    obstacle.classList.remove('obstacleAni');
}

else if(offsetX<90 && cross){
    score++;
    updateScore(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000)

    setTimeout(()=>{
        aniDur=ox=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newAni=aniDur-0.2;
        obstacle.style.animationDuration=newAni+"s";
    } , 1000)
}


} , 10)

function updateScore(score){
    scoreBoard=document.querySelector('.score');
    scoreBoard.innerHTML="Score :"+score;
}