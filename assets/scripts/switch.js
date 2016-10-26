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
              ScoreHandler.resetScore();
              break;
          case "INSTRUCTION":
              ImageHandler.setUpInstructionScreen();
              ButtonHandler.setUpInstructionScreenButtons();
              break;
          case "GAME":
              if(!GameHandler.init){
                  GameHandler.initGame(true);
              }
              GameHandler.gameLoop();
              break;
          case "GAME_MAPONE":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapOne();
              Switch.currentState = "GAME";
              break;
          case "GAME_MAPTWO":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapTwo();
              Switch.currentState = "GAME";
              break;
          case "GAME_MAPTHREE":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapThree();
              Switch.currentState = "GAME";
              break;
          case "REDWIN":
              ScoreHandler.scoreUpdate(1,0);
              Switch.currentState = "GAMEOVER";
              break;
          case "BLUEWIN":
              ScoreHandler.scoreUpdate(0,1);
              Switch.currentState = "GAMEOVER";
              break;
          case "MAP_SELECT":
              ImageHandler.setUpMapScreen();
              ButtonHandler.setUpMapScreenButtons();
              ScoreHandler.removeScoreText();
              break;
          case "GAMEOVER":
              GameHandler.cleanUp();
              ImageHandler.setUpGameOverScreen();
              ButtonHandler.setUpGameOverButtons();
              ScoreHandler.addScoreText();
              GameTimer.resetGameTimer();
              PowerUpHandler.clearBoosts();
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
