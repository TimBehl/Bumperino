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
                SoundHandler.playGameMusic();
                GameHandler.initGame(false);
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
          case "GAME_MAPFOUR":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapFour();
              Switch.currentState = "GAME";
              break;
          case "GAME_MAPFIVE":
              ImageHandler.setUpGameScreen();
              ButtonHandler.setUpGameScreenButtons();
              ImageHandler.setUpMapFive();
              Switch.currentState = "GAME";
              break;
          case "REDWIN":
              ScoreHandler.scoreUpdate(1,0);
              SoundHandler.playMenuMusic();
              Switch.currentState = "GAMEOVER";
              break;
          case "BLUEWIN":
              ScoreHandler.scoreUpdate(0,1);
              SoundHandler.playMenuMusic();
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
          case "OPTIONS":
              ImageHandler.setUpOptionScreen();
              ButtonHandler.setUpOptionButtons();
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
