var key_Left = 37;
var key_Up = 38;
var key_Right = 39;
var key_Down = 40;
var key_W = 87;
var key_A = 65;
var key_S = 83;
var key_D = 68;
var key_SpaceBar = 32;

function handleKeyDown(evt) {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case key_Left:  console.log(evt.keyCode+" down"); return false;
        case key_Right: console.log(evt.keyCode+" down"); return false;
        case key_Up:    console.log(evt.keyCode+" down"); return false;
        case key_Down:  console.log(evt.keyCode+" down"); return false;
        case key_W:  console.log(evt.keyCode+" down"); return false;
        case key_A:  console.log(evt.keyCode+" down"); return false;
        case key_S:  console.log(evt.keyCode+" down"); return false;
        case key_D:  console.log(evt.keyCode+" down"); return false;
        case key_SpaceBar:  console.log(evt.keyCode+" down"); return false;
    }
}
 
function handleKeyUp(evt) {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case key_Left:    console.log(evt.keyCode+" up"); break;
        case key_Right:   console.log(evt.keyCode+" up"); break;
        case key_Up:      console.log(evt.keyCode+" up"); break;
        case key_Down:    console.log(evt.keyCode+" up"); break;
        case key_W:   console.log(evt.keyCode+" up"); break;
        case key_A:      console.log(evt.keyCode+" up"); break;
        case key_S:    console.log(evt.keyCode+" up"); break;
        case key_D:      console.log(evt.keyCode+" up"); break;
        case key_SpaceBar:    console.log(evt.keyCode+" up"); break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;