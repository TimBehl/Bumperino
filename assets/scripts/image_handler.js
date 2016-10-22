this.imageHandler = this.imageHandler || {};
(function(){
  let initScreens = () => {
      stage.addChild(titleScreen);
      stage.addChild(gameScreen);
      stage.addChild(instructionScreen);
      stage.addChild(gameoverScreen);
      stage.addChild(mapScreen);
      stage.addChild(mapOneScreen);
      stage.addChild(mapTwoScreen);
      stage.addChild(mapThreeScreen);
      titleScreen.visible = gameScreen.visible = instructionScreen.visible = gameoverScreen.visible = mapScreen.visible = mapOneScreen.visible = mapTwoScreen.visible = mapThreeScreen.visible = false;
      console.log("screen images loaded");
  }

  imageHandler.initScreens = initScreens;

  let setUpTitleScreen = () => {
      titleScreen.visible = true;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
  }

  imageHandler.setUpTitleScreen = setUpTitleScreen;

  let setUpGameScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = true;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
  }

  imageHandler.setUpGameScreen = setUpGameScreen;

  let setUpInstructionScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = true;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
  }

  imageHandler.setUpInstructionScreen = setUpInstructionScreen;

  let setUpGameOverScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = true;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
  }

  imageHandler.setUpGameOverScreen = setUpGameOverScreen;

  let setUpMapScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = true;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
  }

  imageHandler.setUpMapScreen = setUpMapScreen;
    
    let setUpMapOne = () => {
      mapOneScreen.visible = true;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
    }
    
    imageHandler.setUpMapOne = setUpMapOne;
    
    let setUpMapTwo = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = true;
      mapThreeScreen.visible = false;
    }
    
    imageHandler.setUpMapTwo = setUpMapTwo;
    
    let setUpMapThree = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = true;
    }
    
    imageHandler.setUpMapThree = setUpMapThree;
}());
