this.Switch = this.Switch || {};
(function(){
  Switch.currentState = "MENU";
  const FPS = 30;
  Switch.setFPS = FPS;

  console.log("HURRRDURRR IMA WHALE");
  console.log(Switch.setFPS);

  let mainLoop = () => {
      switch(Switch.currentState){
          case "MENU":
              imageHandler.setUpTitleScreen();
              buttonHandler.setUpTitleScreenButtons();
              break;
          case "INSTRUCTION":
              imageHandler.setUpInstructionScreen();
              buttonHandler.setUpInstructionScreenButtons();
              break;
          case "GAME_MAPONE":
              imageHandler.setUpGameScreen();
              buttonHandler.setUpGameScreenButtons();
              imageHandler.setUpMapOne();
              gameLoop();
              break;
          case "GAME_MAPTWO":
              imageHandler.setUpGameScreen();
              buttonHandler.setUpGameScreenButtons();
              imageHandler.setUpMapTwo();
              gameLoop();
              break;
          case "GAME_MAPTHREE":
              imageHandler.setUpGameScreen();
              buttonHandler.setUpGameScreenButtons();
              imageHandler.setUpMapThree();
              gameLoop();
              break;
          case "MAP_SELECT":
              imageHandler.setUpMapScreen();
              buttonHandler.setUpMapScreenButtons();
              break;
          case "GAMEOVER":
              imageHandler.setUpGameOverScreen();
              buttonHandler.setUpGameOverButtons();
              scoreHandler.resetScore();
              gameTimer.resetGameTimer();
              mouseHandler.emoveMouseText();
              break;
          default:
              break;
      }
      stage.update();
  }


  let initMainLoop = () => {
      createjs.Ticker.addEventListener("tick", mainLoop);
      createjs.Ticker.setFPS(FPS);
      imageHandler.initScreens();
      buttonHandler.initButtons();
  }

  Switch.initMainLoop = initMainLoop;
}());
