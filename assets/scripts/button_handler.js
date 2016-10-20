function initButtons(){
    menuButton.x = instructionButton.x = vsAIButton.x = vsPlayerButton.x = 275;
    menuButton.y = 400;
    instructionButton.y = 400;
    vsPlayerButton.y = 200;
    vsAIButton.y = 300;
    stage.addChild(menuButton);
    stage.addChild(instructionButton);
    stage.addChild(vsPlayerButton);
    stage.addChild(vsAIButton);
    menuButton.visible = instructionButton.visible = vsPlayerButton.visible = vsAIButton.visible = false;
    console.log("buttons loaded");
    menuButton.on("click", function(evt){ SWITCH = "MENU" });
    instructionButton.on("click", function(evt){ SWITCH = "INSTRUCTION" });
    vsPlayerButton.on("click", function(evt){
        SWITCH = "MAP_SELECT";
    });
    vsAIButton.on("click", function(evt){
        SWITCH = "MAP_SELECT";
    });
}

function setUpTitleScreenButtons(){
    menuButton.visible = false;
    instructionButton.visible = true;
    vsAIButton.visible = true;
    vsPlayerButton.visible = true;
}

function setUpInstructionScreenButtons(){
    menuButton.visible = true;
    instructionButton.visible = false;
    vsAIButton.visible = false;
    vsPlayerButton.visible = false;
}

function setUpGameScreenButtons(){
    menuButton.visible = false;
    instructionButton.visible = false;
    vsAIButton.visible = false;
    vsPlayerButton.visible = false;
}

function setUpGameOverButtons(){
    menuButton.visible = true;
    instructionButton.visible = false;
    vsAIButton.visible = false;
    vsPlayerButton.visible = false;
}

function setUpMapScreenButtons(){
    menuButton.visible = true;
    instructionButton.visible = false;
    vsAIButton.visible = false;
    vsPlayerButton.visible = false;
}