this.ImageHandler = this.ImageHandler || {};
(function(){

  ImageHandler.currentMap = {};

  let initScreens = () => {
      stage.addChild(titleScreen);
      stage.addChild(gameScreen);
      stage.addChild(instructionScreen);
      stage.addChild(gameoverScreen);
      stage.addChild(mapScreen);
      stage.addChild(mapOneScreen);
      stage.addChild(mapTwoScreen);
      stage.addChild(mapThreeScreen);
      stage.addChild(mapFourScreen);
      stage.addChild(mapFiveScreen);
      titleScreen.visible = gameScreen.visible = instructionScreen.visible =
      gameoverScreen.visible = mapScreen.visible = mapOneScreen.visible =
      mapTwoScreen.visible = mapThreeScreen.visible = mapFourScreen.visible =
      mapFiveScreen.visible = false;
      console.log("screen images loaded");
  }

  ImageHandler.initScreens = initScreens;

  let setUpTitleScreen = () => {
      titleScreen.visible = true;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
  }

  ImageHandler.setUpTitleScreen = setUpTitleScreen;

  let setUpGameScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = true;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
  }

  ImageHandler.setUpGameScreen = setUpGameScreen;

  let setUpInstructionScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = true;
      gameoverScreen.visible = false;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
  }

  ImageHandler.setUpInstructionScreen = setUpInstructionScreen;

  let setUpGameOverScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = true;
      mapScreen.visible = false;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
  }

  ImageHandler.setUpGameOverScreen = setUpGameOverScreen;

  let setUpMapScreen = () => {
      titleScreen.visible = false;
      gameScreen.visible = false;
      instructionScreen.visible = false;
      gameoverScreen.visible = false;
      mapScreen.visible = true;
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
  }

  ImageHandler.setUpMapScreen = setUpMapScreen;

    let setUpMapOne = () => {
      mapOneScreen.visible = true;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
      ImageHandler.currentMap = mapOneScreen;
      PowerUpHandler.addMapOneBoosts();
    }

    ImageHandler.setUpMapOne = setUpMapOne;

    let setUpMapTwo = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = true;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
      ImageHandler.currentMap = mapTwoScreen;
      PowerUpHandler.addMapTwoBoosts();
    }

    ImageHandler.setUpMapTwo = setUpMapTwo;

    let setUpMapThree = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = true;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = false;
      ImageHandler.currentMap = mapThreeScreen;
      PowerUpHandler.addMapThreeBoosts();
    }

    ImageHandler.setUpMapThree = setUpMapThree;

    let setUpMapFour = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = true;
      mapFiveScreen.visible = false;
      ImageHandler.currentMap = mapFourScreen;
    }

    ImageHandler.setUpMapFour = setUpMapFour;

    let setUpMapFive = () => {
      mapOneScreen.visible = false;
      mapTwoScreen.visible = false;
      mapThreeScreen.visible = false;
      mapFourScreen.visible = false;
      mapFiveScreen.visible = true;
      ImageHandler.currentMap = mapFiveScreen;
    }

    ImageHandler.setUpMapFive = setUpMapFive;
}());
