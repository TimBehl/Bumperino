// var KEY_CODES.keyLeft = 37;
// var KEY_CODES.keyUp = 38;
// var KEY_CODES.keyRight = 39;
// var KEY_CODES.keyDown = 40;
// var KEY_CODES.keyW = 87;
// var KEY_CODES.keyA = 65;
// var KEY_CODES.keyS = 83;
// var KEY_CODES.keyD = 68;
// var KEY_CODES.keySpaceBar = 32;
this.KeyHandler = this.KeyHandler || {};
(function(){

const KEY_CODES = {
  keyLeft: 37,
  keyUp: 38,
  keyRight: 39,
  keyDown: 40,
  keyW: 87,
  keyA: 65,
  keyS: 83,
  keyD: 68,
  keySpaceBar: 32
}

let handleKeyDown = (evt) => {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEY_CODES.keyLeft:
          GameHandler.playerTurning(1,false);
          return false;
        case KEY_CODES.keyRight:
          GameHandler.playerTurning(1,true);
          return false;
        case KEY_CODES.keyUp:
          GameHandler.playerAccelerating(1,true);
          return false;
        case KEY_CODES.keyDown:
          GameHandler.playerAccelerating(1,false);
          return false;
        case KEY_CODES.keyW:
          GameHandler.playerAccelerating(0,true);
          return false;
        case KEY_CODES.keyA:
          GameHandler.playerTurning(0,false);
          return false;
        case KEY_CODES.keyS:
          GameHandler.playerAccelerating(0,false);
          return false;
        case KEY_CODES.keyD:
          GameHandler.playerTurning(0,true);
          return false;
        case KEY_CODES.keySpaceBar:

          return false;
    }
}

let handleKeyUp = (evt) => {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEY_CODES.keyLeft:
          GameHandler.playerTurning(1);
          break;
        case KEY_CODES.keyRight:
          GameHandler.playerTurning(1);
          break;
        case KEY_CODES.keyUp:
          GameHandler.playerAccelerating(1);
          break;
        case KEY_CODES.keyDown:
          GameHandler.playerAccelerating(1);
          break;
        case KEY_CODES.keyW:
          GameHandler.playerAccelerating(0);
          break;
        case KEY_CODES.keyA:
          GameHandler.playerTurning(0);
          break;
        case KEY_CODES.keyS:
          GameHandler.playerAccelerating(0);
          break;
        case KEY_CODES.keyD:
          GameHandler.playerTurning(0);
          break;
        case KEY_CODES.keySpaceBar:

          break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

}());
