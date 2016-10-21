this.gameTimer = this.gameTimer || {};
(function(){
let frameCount = 0;
let timer,
    timerText;

gameTimer.frameCount = frameCount;
gameTimer.timer = timer;
gameTimer.timerText = timerText;

let resetGameTimer = () => {
    stage.removeChild(timerText);
    frameCount = 0;
    timer = 0;
    timerText = {};
}

gameTimer.resetGameTimer = resetGameTimer;

let runGameTimer = () => {
    frameCount += 1;
    if(frameCount%(Switch.setFPS/10) === 0) {
        gameTimer = frameCount/(Switch.setFPS);
    }
}

gameTimer.runGameTimer = runGameTimer;

let addTimerText = () => {
    stage.removeChild(timerText);
    timerText = new createjs.Text(timer, "20px Arial", "#000");
    timerText.x = 10;
    timerText.y = 10;
    stage.addChild(timerText);
}

gameTimer.addTimerText = addTimerText;

}());
