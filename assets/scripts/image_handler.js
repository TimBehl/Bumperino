function initScreens(){
    stage.addChild(titleScreen);
    stage.addChild(gameScreen);
    stage.addChild(instructionScreen);
    stage.addChild(gameoverScreen);
    stage.addChild(mapScreen);
    titleScreen.visible = gameScreen.visible = instructionScreen.visible = gameoverScreen.visible = mapScreen.visible = false;
    console.log("screen images loaded");
}

function setUpTitleScreen(){
    titleScreen.visible = true;
    gameScreen.visible = false;
    instructionScreen.visible = false;
    gameoverScreen.visible = false;
    mapScreen.visible = false;
}

function setUpGameScreen(){
    titleScreen.visible = false;
    gameScreen.visible = true;
    instructionScreen.visible = false;
    gameoverScreen.visible = false;
    mapScreen.visible = false;
}

function setUpInstructionScreen(){
    titleScreen.visible = false;
    gameScreen.visible = false;
    instructionScreen.visible = true;
    gameoverScreen.visible = false;
    mapScreen.visible = false;
}

function setUpGameOverScreen(){
    titleScreen.visible = false;
    gameScreen.visible = false;
    instructionScreen.visible = false;
    gameoverScreen.visible = true;
    mapScreen.visible = false;
}

function setUpMapScreen(){
    titleScreen.visible = false;
    gameScreen.visible = false;
    instructionScreen.visible = false;
    gameoverScreen.visible = false;
    mapScreen.visible = true;
}