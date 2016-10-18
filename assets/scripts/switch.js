var SWITCH = "MENU";
var FPS = 30;

function mainLoop() {
    switch(SWITCH){
        case "MENU":
            setUpTitleScreen();
            setUpTitleScreenButtons();
            break;
        case "INSTRUCTION":
            setUpInstructionScreen();
            setUpInstructionScreenButtons();
            break;
        case "GAME":
            setUpGameScreen();
            setUpGameScreenButtons();
            gameLoop();
            //displaySprites();
            break;
        case "GAMEOVER":
            removeSprites();
            setUpGameOverScreen();
            setUpGameOverButtons();
            resetScore();
            resetGameTimer();
            removeMouseText();
        default:
            break;
    }
    stage.update();
}

function initMainLoop(){
    createjs.Ticker.addEventListener("tick", mainLoop);
    createjs.Ticker.setFPS(FPS);
    initScreens();
    initButtons();
}