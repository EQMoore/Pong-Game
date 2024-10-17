window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.code;
    console.log(`KEYDOWN: ${key}`);
    if(!cpuchecked){
        switch(key){
        case "KeyW":
            paddleL.vy = -paddleVelocity
            break;
        case "KeyS":
            paddleL.vy = paddleVelocity
            break;
        }
    }
    switch (key) {
        case "ArrowUp":
            paddleR.vy = -paddleVelocity
            break;
        case "ArrowDown":
            paddleR.vy = paddleVelocity
            break;
    }
        if(!twoPlayerMode){
            switch (key) {
        case "Numpad4":
            paddleT.vx = -paddleVelocity;
            break;
        case "KeyI":
            PaddleT.vx = -paddleVelocity;
            break;
        case "Numpad6":
            paddleT.vx = paddleVelocity;
            break;
                case "KeyP":
                    PaddleT.vx= paddleVelocity;
                    break;
        case "KeyH":
            paddleB.vx = -paddleVelocity;
            break;
        case "KeyK":
            paddleB.vx = paddleVelocity;
            break;
        case "End":
            resetGame();
            break
        }
    }
    else {
        if(!cpuchecked){
            switch(key){
        case "KeyA":
            paddleB.vx = -paddleVelocity;
            break;
        case "KeyD":
            paddleB.vx = paddleVelocity;
            break;
            }
        }
        switch (key) {
            case "ArrowLeft":
                paddleT.vx = -paddleVelocity;
                break;
            case "ArrowRight":
                paddleT.vx = paddleVelocity;
                break;
            case "End":
                resetGame();
                break
            }
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
            if(!twoPlayerMode){
                switch (key) {
            case "Numpad4":
            case "Numpad6":
                paddleT.vx = 0
                break;
            case "KeyH":
            case "KeyK":
                paddleB.vx = 0;
                break;
            case "End":
                resetGame();
                break
            }
        }
        else {
            switch (key) {
                case "ArrowLeft":
                case "ArrowRight":
                    paddleT.vx = 0;
                    break;
                case "KeyA":
                case "KeyD":
                    paddleB.vx = 0;
                    break;
                case "End":
                    resetGame();
                    break
                }
        }

}
