function initButtons(){
    menuButton.x = instructionButton.x = gameStartButton.x = 650;
    menuButton.y = 350;
    instructionButton.y = 425;
    gameStartButton.y = 500;
    stage.addChild(menuButton);
    stage.addChild(instructionButton);
    stage.addChild(gameStartButton);
    menuButton.visible = instructionButton.visible = gameStartButton.visible = false;
    console.log("buttons loaded");
    menuButton.on("click", function(evt){ SWITCH = "MENU" });
    instructionButton.on("click", function(evt){ SWITCH = "INSTRUCTION" });
    gameStartButton.on("click", function(evt){
        SWITCH = "GAME";
        displaySprites();
    });
}

function setUpTitleScreenButtons(){
    menuButton.visible = false;
    instructionButton.visible = true;
    gameStartButton.visible = true;
}

function setUpInstructionScreenButtons(){
    menuButton.visible = true;
    instructionButton.visible = false;
    gameStartButton.visible = true;
}

function setUpGameScreenButtons(){
    menuButton.visible = false;
    instructionButton.visible = false;
    gameStartButton.visible = false;
}

function setUpGameOverButtons(){
    menuButton.visible = true;
    instructionButton.visible = false;
    gameStartButton.visible = false;
}