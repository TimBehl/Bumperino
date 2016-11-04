this.ButtonHandler = this.ButtonHandler || {};
(function(){

  let initButtons = () => {
      menuButton.x = instructionButton.x = vsAIButton.x = vsPlayerButton.x = rematchButton.x = optionButton.x = 275;
      menuButton.y = 450;
      rematchButton.y = 350;
      instructionButton.y = 375;
      vsPlayerButton.y = 175;
      vsAIButton.y = 275;
      optionButton.y = 475;
      mapOneButton.y = mapTwoButton.y = mapThreeButton.y = 200;
      mapFourButton.y = mapFiveButton.y = 325;
      mapOneButton.x = 200;
      mapTwoButton.x = 350;
      mapThreeButton.x = 500;
      mapFourButton.x = 275;
      mapFiveButton.x = 425;
      soundMuteButton.x = soundUnmuteButton.x = musicMuteButton.x = musicUnmuteButton.x = 400;
      musicMuteButton.y = musicUnmuteButton.y = 210;
      soundMuteButton.y = soundUnmuteButton.y = 270;
      stage.addChild(menuButton);
      stage.addChild(instructionButton);
      stage.addChild(vsPlayerButton);
      stage.addChild(vsAIButton);
      stage.addChild(mapOneButton);
      stage.addChild(mapTwoButton);
      stage.addChild(mapThreeButton);
      stage.addChild(mapFourButton);
      stage.addChild(mapFiveButton);
      stage.addChild(rematchButton);
      stage.addChild(optionButton);
      stage.addChild(soundMuteButton);
      stage.addChild(soundUnmuteButton);
      stage.addChild(musicMuteButton);
      stage.addChild(musicUnmuteButton);
      menuButton.visible = instructionButton.visible = vsPlayerButton.visible = vsAIButton.visible =
      mapOneButton.visible = mapTwoButton.visible = mapThreeButton.visible = rematchButton.visible =
      mapFourButton.visible = mapFiveButton.visible = optionButton.visible = musicMuteButton.visible =
      musicUnmuteButton.visible = soundMuteButton.visible = soundUnmuteButton.visible = false;
      console.log("buttons loaded");
      menuButton.on("click", (evt) => { Switch.currentState = "MENU"; });
      instructionButton.on("click", (evt) => { Switch.currentState = "INSTRUCTION"; });
      vsPlayerButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
      vsAIButton.on("click", (evt) => {
          Switch.currentState = "GAMEOVER";
      });
      mapOneButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPONE";
      });
      mapTwoButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPTWO";
      });
      mapThreeButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPTHREE";
      });
      mapFourButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPFOUR";
      });
      mapFiveButton.on("click", (evt) => {
          Switch.currentState = "GAME_MAPFIVE";
      });
      rematchButton.on("click", (evt) => {
          Switch.currentState = "MAP_SELECT";
      });
      optionButton.on("click", (evt) => {
          Switch.currentState = "OPTIONS";
      });
      soundMuteButton.on("click", (evt) => {
          SoundHandler.isSoundOn = false;
          soundMuteButton.visible = false;
          soundUnmuteButton.visible = true;
      });
      soundUnmuteButton.on("click", (evt) => {
          SoundHandler.isSoundOn = true;
          soundMuteButton.visible = true;
          soundUnmuteButton.visible = false;
      });
      musicMuteButton.on("click", (evt) => {
          SoundHandler.isMusicOn = false;
          musicMuteButton.visible = false;
          musicUnmuteButton.visible = true;
          SoundHandler.muteMusic();
      });
      musicUnmuteButton.on("click", (evt) => {
          SoundHandler.isMusicOn = true;
          musicMuteButton.visible = true;
          musicUnmuteButton.visible = false;
          SoundHandler.unmuteMusic();
      });
  }

  ButtonHandler.initButtons = initButtons;

  let setUpTitleScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = true;
      vsAIButton.visible = true;
      vsPlayerButton.visible = true;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
      optionButton.visible = true;
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = false;
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = false;
  }

  ButtonHandler.setUpTitleScreenButtons = setUpTitleScreenButtons;

  let setUpInstructionScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
      optionButton.visible = false;
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = false;
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = false;
  }

  ButtonHandler.setUpInstructionScreenButtons = setUpInstructionScreenButtons;

  let setUpGameScreenButtons = () => {
      menuButton.visible = false;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = false;
      optionButton.visible = false;
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = false;
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = false;
  }

  ButtonHandler.setUpGameScreenButtons = setUpGameScreenButtons;

  let setUpGameOverButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = false;
      mapTwoButton.visible = false;
      mapThreeButton.visible = false;
      mapFourButton.visible = false;
      mapFiveButton.visible = false;
      rematchButton.visible = true;
      optionButton.visible = false;
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = false;
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = false;
  }

  ButtonHandler.setUpGameOverButtons = setUpGameOverButtons;

  let setUpMapScreenButtons = () => {
      menuButton.visible = true;
      instructionButton.visible = false;
      vsAIButton.visible = false;
      vsPlayerButton.visible = false;
      mapOneButton.visible = true;
      mapTwoButton.visible = true;
      mapThreeButton.visible = true;
      mapFourButton.visible = true;
      mapFiveButton.visible = true;
      rematchButton.visible = false;
      optionButton.visible = false;
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = false;
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = false;
  }

  ButtonHandler.setUpMapScreenButtons = setUpMapScreenButtons;

  let setUpOptionButtons = () => {
    menuButton.visible = true;
    instructionButton.visible = false;
    vsAIButton.visible = false;
    vsPlayerButton.visible = false;
    mapOneButton.visible = false;
    mapTwoButton.visible = false;
    mapThreeButton.visible = false;
    mapFourButton.visible = false;
    mapFiveButton.visible = false;
    rematchButton.visible = false;
    optionButton.visible = false;
    if(SoundHandler.isSoundOn){
      soundMuteButton.visible = true;
      soundUnmuteButton.visible = false;
    }else{
      soundMuteButton.visible = false;
      soundUnmuteButton.visible = true;
    }
    if(SoundHandler.isMusicOn){
      musicMuteButton.visible = true;
      musicUnmuteButton.visible = false;
    }else{
      musicMuteButton.visible = false;
      musicUnmuteButton.visible = true;
    }
  }

  ButtonHandler.setUpOptionButtons = setUpOptionButtons;
}());
