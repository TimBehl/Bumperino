function initScreens(){
    stage.addChild(titleScreen);
    stage.addChild(gameScreen);
    stage.addChild(instructionScreen);
    stage.addChild(gameoverScreen);
    titleScreen.visible = gameScreen.visible = instructionScreen.visible = gameoverScreen.visible = false;
    console.log("screen images loaded");
}

function setUpTitleScreen(){
    titleScreen.visible = true;
    gameScreen.visible = false;
    instructionScreen.visible = false;
    gameoverScreen.visible = false;
}

function setUpGameScreen(){
    titleScreen.visible = false;
    gameScreen.visible = true;
    instructionScreen.visible = false;
    gameoverScreen.visible = false;
}

function setUpInstructionScreen(){
    titleScreen.visible = false;
    gameScreen.visible = false;
    instructionScreen.visible = true;
    gameoverScreen.visible = false;
}

function setUpGameOverScreen(){
    titleScreen.visible = false;
    gameScreen.visible = false;
    instructionScreen.visible = false;
    gameoverScreen.visible = true;
}