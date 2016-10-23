this.Switch = this.Switch || {};
(function(){
  Switch.currentState = "MENU";
  const FPS = 30;
  Switch.setFPS = FPS;
  console.log(Switch.setFPS);

  let mainLoop = () => {
      switch(Switch.currentState){
          case "MENU":
              ImageHandler.setUpTitleScreen();
              ButtonHandler.setUpTitleScreenButtons();
              break;
          case "INSTRUCTION":
              ImageHandler.setUpInstructionScreen();
              ButtonHandler.setUpInstructionScreenButtons();
              break;
          case "GAME":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              if(!GameHandler.init){
                GameHandler.initGame(true);
              }
              GameHandler.gameLoop();
          case "GAME_MAPONE":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapOne();
              GameHandler.gameLoop();
              break;
          case "GAME_MAPTWO":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapTwo();
              GameHandler.gameLoop();
              break;
          case "GAME_MAPTHREE":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapThree();
              GameHandler.gameLoop();
              break;
          case "MAP_SELECT":
              ImageHandler.setUpMapScreen();
              ButtonHandler.setUpMapScreenButtons();
              break;
          case "GAMEOVER":
              removeSprites();
              ImageHandler.setUpGameOverScreen();
              ButtonHandler.setUpGameOverButtons();
              ScoreHandler.resetScore();
              GameTimer.resetGameTimer();
              MouseHandler.removeMouseText();
              break;
          default:
              break;
      }
      stage.update();
  }


  let initMainLoop = () => {
      createjs.Ticker.addEventListener("tick", mainLoop);
      createjs.Ticker.setFPS(FPS);
      ImageHandler.initScreens();
      ButtonHandler.initButtons();
  }

  Switch.initMainLoop = initMainLoop;
}());
