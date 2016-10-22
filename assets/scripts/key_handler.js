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
          console.log(evt.keyCode+" down");
          return false;
        case KEY_CODES.keyRight:
          console.log(evt.keyCode+" down");
          return false;
        case KEY_CODES.keyUp:
          console.log(evt.keyCode+" down");
          return false;
        case KEY_CODES.keyDown:
          console.log(evt.keyCode+" down");
          return false;
        case KEY_CODES.keyW:
          console.log(evt.keyCode+" down");
          GameHandler.playerAccelerating(0,true);
          return false;
        case KEY_CODES.keyA:
          console.log(evt.keyCode+" down");
          GameHandler.playerTurning(0,false);
          return false;
        case KEY_CODES.keyS:
          console.log(evt.keyCode+" down");
          GameHandler.playerAccelerating(0,false);
          return false;
        case KEY_CODES.keyD:
          GameHandler.playerTurning(0,true);
          return false;
        case KEY_CODES.keySpaceBar:
          console.log(evt.keyCode+" down");
          return false;
    }
}

let handleKeyUp = (evt) => {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEY_CODES.keyLeft:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyRight:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyUp:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyDown:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyW:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyA:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyS:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keyD:
          console.log(evt.keyCode+" up");
          break;
        case KEY_CODES.keySpaceBar:
          console.log(evt.keyCode+" up");
          break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

}());
