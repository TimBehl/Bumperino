this.imageHandler = this.imageHandler || {};
(function(){
  let initScreens = () => {
      stage.addChild(titleScreen);
      stage.addChild(gameScreen);
      stage.addChild(instructionScreen);
      stage.addChild(gameoverScreen);
      stage.addChild(mapScreen);
      titleScreen.visible = gameScreen.visible = instructionScreen.visible = gameoverScreen.visible = mapScreen.visible = false;
      console.log("screen images loaded");
  }

  imageHandler.initScreens = initScreens;

  let setUpTitleScreen = () => {
      titleScreen.visible = true;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  imageHandler.setUpTitleScreen = setUpTitleScreen;

  let setUpGameScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = true;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  imageHandler.setUpGameScreen = setUpGameScreen;

  let setUpInstructionScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = true;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  imageHandler.setUpInstructionScreen = setUpInstructionScreen;

  let setUpGameOverScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = true;
      mapScreen.visible = false;
  }

  imageHandler.setUpGameOverScreen = setUpGameOverScreen;

  let setUpMapScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = true;
  }

  imageHandler.setUpMapScreen = setUpMapScreen;
}());
