this.ImageHandler = this.ImageHandler || {};
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

  ImageHandler.initScreens = initScreens;

  let setUpTitleScreen = () => {
      titleScreen.visible = true;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  ImageHandler.setUpTitleScreen = setUpTitleScreen;

  let setUpGameScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = true;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  ImageHandler.setUpGameScreen = setUpGameScreen;

  let setUpInstructionScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = true;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
  }

  ImageHandler.setUpInstructionScreen = setUpInstructionScreen;

  let setUpGameOverScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = true;
      mapScreen.visible = false;
  }

  ImageHandler.setUpGameOverScreen = setUpGameOverScreen;

  let setUpMapScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = true;
  }

  ImageHandler.setUpMapScreen = setUpMapScreen;
}());
