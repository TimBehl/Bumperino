var frameCount = 0;
var gameTimer, timerText;
var FPS = 30;

function resetGameTimer() {
    stage.removeChild(timerText);
    frameCount = 0;
    gameTimer = 0;
    timerText = -1;
}

function runGameTimer() {
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);   
    }
}

function addTimerText(){
    stage.removeChild(timerText);
    timerText = new createjs.Text(gameTimer, "20px Arial", "#000");
    timerText.x = 10;
    timerText.y = 10;
    stage.addChild(timerText);
}