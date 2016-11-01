this.GameTimer = this.GameTimer || {};
(function(){
let frameCount = 0;
let timer,
    timerText;

GameTimer.frameCount = frameCount;
GameTimer.timer = timer;
GameTimer.timerText = timerText;

let resetGameTimer = () => {
    stage.removeChild(timerText);
    frameCount = 0;
    timer = 0;
    timerText = {};
}

GameTimer.resetGameTimer = resetGameTimer;

let runGameTimer = () => {
    frameCount += 1;
    if(frameCount%(Switch.setFPS/10) === 0) {
        GameTimer.timer = frameCount/(Switch.setFPS);
    }
}

GameTimer.runGameTimer = runGameTimer;

let addTimerText = () => {
    stage.removeChild(timerText);
    timerText = new createjs.Text(timer, "20px Arial", "#000");
    timerText.x = 10;
    timerText.y = 10;
    stage.addChild(timerText);
}

GameTimer.addTimerText = addTimerText;

}());
