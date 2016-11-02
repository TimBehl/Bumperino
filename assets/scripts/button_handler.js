this.ButtonHandler = this.ButtonHandler || {};
(function(){

  let initButtons = () => {
      menuButton.x = instructionButton.x = vsAIButton.x = vsPlayerButton.x = rematchButton.x = 275;
      menuButton.y = 450;
      rematchButton.y = 350;
      instructionButton.y = 400;
      vsPlayerButton.y = 200;
      vsAIButton.y = 300;
      mapOneButton.y = mapTwoButton.y = mapThreeButton.y = 200;
      mapFourButton.y = mapFiveButton.y = 325;
      mapOneButton.x = 200;
      mapTwoButton.x = 350;
      mapThreeButton.x = 500;
      mapFourButton.x = 275;
      mapFiveButton.x = 425;
      stage.addChild(menuButton);
      stage.addChild(instructionButton);
      stage.addChild(vsPlayerButton);
      stage.addChild(vsAIButton);
      stage.addChild(mapOneButton);
      stage.addChild(mapTwoButton);
      stage.addChild(mapThreeButton);
      stage.addChild(mapFourButton);
      stage.addChild(mapFiveButton);
      stage.addChild(rematchButton);
      menuButton.visible = instructionButton.visible = vsPlayerButton.visible = vsAIButton.visible =
      mapOneButton.visible = mapTwoButton.visible = mapThreeButton.visible = rematchButton.visible =
      mapFourButton.visible = mapFiveButton.visible = false;
      console.log("buttons loaded");
      menuButton.on("click", (evt) => { Switch.currentState = "MENU"; });
      instructionButton.on("click", (evt) => { Switch.currentState = "INSTRUCTION"; });
      vsPlayerButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
      vsAIButton.on("click", (evt) => {
          Switch.currentState = "GAMEOVER";
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
      mapFourButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPFOUR";
      });
      mapFiveButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPFIVE";
      });
      rematchButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
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
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
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
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
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
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
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
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = true;
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
      mapFourButton.visible = true;
      mapFiveButton.visible = true;
      rematchButton.visible = false;
  }

  ButtonHandler.setUpMapScreenButtons = setUpMapScreenButtons;
}());
