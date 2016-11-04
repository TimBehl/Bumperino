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
}());
