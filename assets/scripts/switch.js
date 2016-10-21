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
              setUpTitleScreenButtons();
              break;
          case "INSTRUCTION":
              imageHandler.setUpInstructionScreen();
              setUpInstructionScreenButtons();
              break;
          case "GAME":
              imageHandler.setUpGameScreen();
              setUpGameScreenButtons();
              gameLoop();
              break;
          case "MAP_SELECT":
              imageHandler.setUpMapScreen();
              setUpMapScreenButtons();
              break;
          case "GAMEOVER":
              removeSprites();
              setUpGameOverScreen();
              setUpGameOverButtons();
              resetScore();
              resetGameTimer();
              removeMouseText();
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
      initButtons();
  }

  Switch.initMainLoop = initMainLoop;
}());
