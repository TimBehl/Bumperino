// var KEY_CODES.keyJ = 37;
// var KEY_CODES.keyI = 38;
// var KEY_CODES.keyL = 39;
// var KEY_CODES.keyK = 40;
// var KEY_CODES.keyW = 87;
// var KEY_CODES.keyA = 65;
// var KEY_CODES.keyS = 83;
// var KEY_CODES.keyD = 68;
// var KEY_CODES.keySpaceBar = 32;
this.KeyHandler = this.KeyHandler || {};
(function(){

const KEY_CODES = {
  keyJ: 74,
  keyI: 73,
  keyL: 76,
  keyK: 75,
  keyW: 87,
  keyA: 65,
  keyS: 83,
  keyD: 68,
  keySpaceBar: 32,
  keyEnter: 13
}

let handleKeyDown = (evt) => {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEY_CODES.keyJ:
          GameHandler.playerTurning(1,false);
          return false;
        case KEY_CODES.keyL:
          GameHandler.playerTurning(1,true);
          return false;
        case KEY_CODES.keyI:
          GameHandler.playerAccelerating(1,true);
          return false;
        case KEY_CODES.keyK:
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
          GameHandler.playerBoosting(0,true);
          return false;
        case KEY_CODES.keyEnter:
          GameHandler.playerBoosting(1,true);
          return false;
    }
}

let handleKeyUp = (evt) => {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEY_CODES.keyJ:
          GameHandler.playerTurning(1);
          break;
        case KEY_CODES.keyL:
          GameHandler.playerTurning(1);
          break;
        case KEY_CODES.keyI:
          GameHandler.playerAccelerating(1);
          break;
        case KEY_CODES.keyK:
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
          GameHandler.playerBoosting(0,false);
          break;
        case KEY_CODES.keyEnter:
          GameHandler.playerBoosting(1,false);
          break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

}());
