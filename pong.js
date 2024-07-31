const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");
const STATE = {STARTUP: 0, PLAYING: 1, GAMEOVER: 2};
const SIDE = {NONE: 0, LEFT: 1, RIGHT: 2, TOP: 3, BOTTOM:4};

let boardWidth = 500;
let boardHeight = 500;
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;
let paddleVelocity = 10;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let hasAbilityL = true;
let hasAbilityR = true;
let ball;
let paddleL;
let paddleR;
let paddleT;
let paddleB;
let scoreL = 0;
let scoreR = 0;
let scoreT = 0;
let scoreB = 0;
let state = STATE.STARTUP;

function resetGame() {
    state = STATE.STARTUP;
    clearInterval(intervalID);
    scoreL = 0;
    scoreR = 0;
    nextTick();
}

let intervalID;
function nextTick() {
    switch (state) {
        case STATE.STARTUP:
            state = startup();
            break;
        case STATE.PLAYING:
            state = playing();
            break;
        case STATE.GAMEOVER:
            state = gameover();
            break;
        default:
            state = STATE.STARTUP;
            break;

    }
    intervalID = setTimeout(nextTick, 10)
}

function startup() {
    ball = new Ball(boardWidth/2, boardHeight/2, 1, -1, ballRadius, "hotpink");
    paddleL = new Paddle(0, 0, paddleWidth, paddleLength, SIDE.LEFT, "red");
    paddleB = new Paddle(boardWidth/2, 0, paddleLength, paddleWidth, SIDE.TOP, "green");
    paddleR = new Paddle(boardWidth-paddleWidth, 0 , paddleWidth, paddleLength, SIDE.RIGHT, "blue");
    // boardHeight-paddleLength
    draw();
    return STATE.PLAYING;
}

function playing() {
    paddleL.move(false, ball);
    paddleR.move(cpucheck.ariaChecked, ball)
    let sideScore = ball.bounce([paddleL, paddleR]);
    if(sideScore != SIDE.NONE){
        if (sideScore == SIDE.LEFT){
             scoreL++;
             ball = new Ball(boardWidth/2, boardHeight/2, -1, -1, ballRadius, "hotpink")
        }
        if (sideScore == SIDE.RIGHT){
            scoreR++;
            ball = new Ball(boardWidth/2, boardHeight/2, 1, -1, ballRadius, "hotpink")
        } 
    }
    // if(!hasAbilityL){
    //     cooldownAbilityL++;
    //     if(cooldownAbilityL >= 300){
    //         hasAbilityL = true;
    //     }
    // }
    // if(!hasAbilityR){
    //     cooldownAbilityR++;
    //     if(cooldownAbilityR >= 300){
    //         hasAbilityR = true;
    //     }
    // }

    updateScore();
    ball.bounce([paddleL, paddleR]);
    ball.move();
    draw();
    if (scoreL > 6 || scoreR > 6 || scoreT > 6 || scoreB > 6) return STATE.GAMEOVER;
    return STATE.PLAYING;
}

function gameover() {
    return STATE.GAMEOVER;
}

function draw() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
    ball.draw(ctx);
    // paddleT.draw(ctx)
    paddleB.draw(ctx)
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}
 
function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreT} <br> ${scoreL} : ${scoreR} <br> ${scoreB}`; // 7 : 3
}