window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.code;
    console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case "KeyW":
            paddleL.vy = -paddleVelocity
            break;
        case "KeyS":
                paddleL.vy = paddleVelocity
                break;
        case "KeyD": {
            if(hasAbilityL){
                ball.vy += -5;
                hasAbilityL = false;
            }
            }
                break;
        case "ArrowUp":
                paddleR.vy = -paddleVelocity
            break;
        case "ArrowDown":
                paddleR.vy = paddleVelocity
            case "ArrowLeft": 
                if(hasAbilityR){
                    ball.vy += -5;
                    hasAbilityR = false;
                }
            break;
        case "End":
            resetGame();
            break
    }
}

window.addEventListener("keyup", keyUp);
function keyUp(event) {
    const key = event.code;
    console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case "KeyW":
        case "KeyS":
            paddleL.vy = 0
            canMoveL = false;
            break;
        case "ArrowUp":
        case "ArrowDown":
            paddleR.vy = 0
            canMoveR = false;
            break;
    }
}