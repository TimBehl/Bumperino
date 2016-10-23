this.ButtonHandler = this.ButtonHandler || {};
(function(){

  let initButtons = () => {
      menuButton.x = instructionButton.x = vsAIButton.x = vsPlayerButton.x = 275;
      menuButton.y = 400;
      instructionButton.y = 400;
      vsPlayerButton.y = 200;
      vsAIButton.y = 300;
      mapOneButton.y = mapTwoButton.y = mapThreeButton.y = 200;
      mapOneButton.x = 200;
      mapTwoButton.x = 350;
      mapThreeButton.x = 500;
      stage.addChild(menuButton);
      stage.addChild(instructionButton);
      stage.addChild(vsPlayerButton);
      stage.addChild(vsAIButton);
      stage.addChild(mapOneButton);
      stage.addChild(mapTwoButton);
      stage.addChild(mapThreeButton);
      menuButton.visible = instructionButton.visible = vsPlayerButton.visible = vsAIButton.visible = mapOneButton.visible = mapTwoButton.visible = mapThreeButton.visible = false;
      console.log("buttons loaded");
      menuButton.on("click", (evt) => { Switch.currentState = "MENU"; });
      instructionButton.on("click", (evt) => { Switch.currentState = "INSTRUCTION"; });
      vsPlayerButton.on("click", (evt) => {
          //Switch.currentState = "MAP_SELECT";
          Switch.currentState = "GAME";
      });
      vsAIButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
      mapOneButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPONE";
      });
      mapTwoButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPTWO";
      });
      mapThreeButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPTHREE";
      });
  }

  ButtonHandler.initButtons = initButtons;

  let setUpTitleScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = true;
      vsAIButton.visible = true;
      vsPlayerButton.visible = true;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
  }

  ButtonHandler.setUpTitleScreenButtons = setUpTitleScreenButtons;

  let setUpInstructionScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
  }

  ButtonHandler.setUpInstructionScreenButtons = setUpInstructionScreenButtons;

  let setUpGameScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
  }

  ButtonHandler.setUpGameScreenButtons = setUpGameScreenButtons;

  let setUpGameOverButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
  }

  ButtonHandler.setUpGameOverButtons = setUpGameOverButtons;

  let setUpMapScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = true;
      mapTwoButton.visible = true;
      mapThreeButton.visible = true;
  }

  ButtonHandler.setUpMapScreenButtons = setUpMapScreenButtons;
}());
