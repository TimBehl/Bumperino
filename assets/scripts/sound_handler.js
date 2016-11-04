this.SoundHandler = this.SoundHandler || {};
(function(){
  SoundHandler.isSoundOn = true;
  SoundHandler.isMusicOn = true;

  let playMenuMusic = () => {
    if(SoundHandler.isMusicOn){
      createjs.Sound.stop();
      menuMusic.play();
    }
  }

  SoundHandler.playMenuMusic = playMenuMusic;

  let playGameMusic = () => {
    if(SoundHandler.isMusicOn){
      createjs.Sound.stop();
      gameMusic.play();
    }
  }

  SoundHandler.playGameMusic = playGameMusic;

  let muteMusic = () => {
    menuMusic.muted = true;
    gameMusic.muted = true;
  }

  SoundHandler.muteMusic = muteMusic;

  let unmuteMusic = () => {
    menuMusic.muted = false;
    gameMusic.muted = false;
  }

  SoundHandler.unmuteMusic = unmuteMusic;

  let muteSound = () => {
    SoundHandler.isSoundOn = false;
  }

  SoundHandler.muteSound = muteSound;

  let unmuteSound = () => {
    SoundHandler.isSoundOn = true;
  }

  SoundHandler.unmuteSound = unmuteSound;

  let playButtonSound = () => {
    if(SoundHandler.isSoundOn){
      createjs.Sound.play("button", {volume: .25});
    }
  }

  SoundHandler.playButtonSound = playButtonSound;

  let playBumpSound = () => {
    if(SoundHandler.isSoundOn){
      createjs.Sound.play("impact", {volume: .3});
    }
  }

  SoundHandler.playBumpSound = playBumpSound;

  let playExplodeSound = () => {
    if(SoundHandler.isSoundOn){
      createjs.Sound.play("explosion", {volume: .2});
    }
  }

  SoundHandler.playExplodeSound = playExplodeSound;

  let playEngineSound = () => {
    if(SoundHandler.isSoundOn){
      engineSound.muted = false;
    }
  }

  SoundHandler.playEngineSound = playEngineSound;

  let stopEngineSound = () => {
    engineSound.muted = true;
  }

  SoundHandler.stopEngineSound = stopEngineSound;

  let playBoostSound = () => {
    if(SoundHandler.isSoundOn){
      createjs.Sound.play("boost", {volume: .25});
    }
  }

  SoundHandler.playBoostSound = playBoostSound;
}());
