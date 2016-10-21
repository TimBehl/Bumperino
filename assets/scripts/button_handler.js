this.buttonHandler = this.buttonHandler || {};
(function(){
  
  let initButtons = () => {
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
      menuButton.on("click", (evt) => { Switch.currentState = "MENU"; });
      instructionButton.on("click", (evt) => { Switch.currentState = "INSTRUCTION"; });
      vsPlayerButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
      vsAIButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
  }

  buttonHandler.initButtons = initButtons;

  let setUpTitleScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = true;
      vsAIButton.visible = true;
      vsPlayerButton.visible = true;
  }

  buttonHandler.setUpTitleScreenButtons = setUpTitleScreenButtons;

  let setUpInstructionScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
  }

  buttonHandler.setUpInstructionScreenButtons = setUpInstructionScreenButtons;

  let setUpGameScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
  }

  buttonHandler.setUpGameScreenButtons = setUpGameScreenButtons;

  let setUpGameOverButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
  }

  buttonHandler.setUpGameOverButtons = setUpGameOverButtons;

  let setUpMapScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
  }

  buttonHandler.setUpMapScreenButtons = setUpMapScreenButtons;
}());
