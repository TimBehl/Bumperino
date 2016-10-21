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
              setUpTitleScreen();
              setUpTitleScreenButtons();
              break;
          case "INSTRUCTION":
              setUpInstructionScreen();
              setUpInstructionScreenButtons();
              break;
          case "GAME":
              setUpGameScreen();
              setUpGameScreenButtons();
              gameLoop();
              break;
          case "MAP_SELECT":
              setUpMapScreen();
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
      initScreens();
      initButtons();
  }

  Switch.initMainLoop = initMainLoop;
}());
