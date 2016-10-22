var stage;
var queue;
var titleScreen, gameScreen, instructionScreen, gameoverScreen, mapScreen;
var menuButton, instructionButton, vsAIButton, vsPlayerButton;
var blockArray = [];
var stageHeight = 600;
var stageWidth = 800;
let spriteSheets = {};
manifest = [
    {src:"images/titlescreen.jpg", id:"title"},
    {src:"images/gamescreen.jpg", id:"game"},
    {src:"images/instructionscreen.jpg", id:"instruction"},
    {src:"images/gameoverscreen.jpg", id:"gameover"},
    {src:"images/mapselectscreen.jpg", id:"mapselect"},
    {src:"images/menubutton.png", id:"menubutton"},
    {src:"images/instructionbutton.png", id:"instructionbutton"},
    {src:"images/vsAIbutton.png", id:"vsAI"},
    {src:"images/vsplayerbutton.png", id:"vsPlayer"},
    {src:"images/block.png", id:"block"},
    {src:"sprites/player/Car.png", id:"playerCar"},
    {src:"scripts/image_handler.js"},
    {src:"scripts/key_handler.js"},
    {src:"scripts/mouse_handler.js"},
    {src:"scripts/game_timer.js"},
    {src:"scripts/score_handler.js"},
    {src:"scripts/button_handler.js"},
    {src:"scripts/switch.js"}
];

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function loadComplete(evt){
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    gameScreen = new createjs.Bitmap(queue.getResult("game"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instruction"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    mapScreen = new createjs.Bitmap(queue.getResult("mapselect"));
    menuButton = new createjs.Bitmap(queue.getResult("menubutton"));
    instructionButton = new createjs.Bitmap(queue.getResult("instructionbutton"));
    vsAIButton = new createjs.Bitmap(queue.getResult("vsAI"));
    vsPlayerButton = new createjs.Bitmap(queue.getResult("vsPlayer"));
    loadSpriteSheet((data) => {
      let json = JSON.parse(data);
      json.images = [queue.getResult("playerCar")];
      spriteSheets.playerCar = new createjs.SpriteSheet(json);
    }, 'sprites/player/Car.json');
    console.log("All 'ere boss!");
    Switch.initMainLoop();
}

function loadSpriteSheet(callback, path){
  //Code for this codeblock used from this source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
  let file = new XMLHttpRequest();
  file.overrideMimeType("application/json");
  file.open('GET', 'assets/' + path, true); // Replace 'my_data' with the path to your file
  file.onreadystatechange = function () {
  if (file.readyState == 4 && file.status == 200) {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(file.responseText);
    }
};
file.send(null);
}

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = stageWidth;
    canvas.height = stageHeight;
    stage = new createjs.Stage(canvas);
}

function setupMapOne(){
    blockArray = [];
    for(var i = 0; i < stageHeight; i += 10){
        for(var j = 0; j < stageWidth; j += 10){
            if((i === 0 || i === stageHeight-10) || (j === 0 || j === stageWidth-10)){
                blockSprite.x = j;
                blockSprite.y = i;
                blockSprite.gotoAndStop("block");
                blockArray.push(blockSprite.clone());
            }
        }
    }
    for(var k = 0; k < blockArray.length; k++){
        stage.addChild(blockArray[k]);
    }
}

function setupMapTwo(){
    blockArray = [];
    for(var i = 0; i < stageHeight; i += 10){
        for(var j = 0; j < stageWidth; j += 10){
            if((i === 0 || i === stageHeight-10) || (j === 0 || j === stageWidth-10)){
                blockSprite.x = j;
                blockSprite.y = i;
                blockSprite.gotoAndStop("block");
                blockArray.push(blockSprite.clone());
            }
        }
    }
    for(var k = 0; k < blockArray.length; k++){
        stage.addChild(blockArray[k]);
    }
}

function setupMapThree(){
    blockArray = [];
    for(var i = 0; i < stageHeight; i += 10){
        for(var j = 0; j < stageWidth; j += 10){
            if((i === 0 || i === stageHeight-10) || (j === 0 || j === stageWidth-10)){
                blockSprite.x = j;
                blockSprite.y = i;
                blockSprite.gotoAndStop("block");
                blockArray.push(blockSprite.clone());
            }
        }
    }
    for(var k = 0; k < blockArray.length; k++){
        stage.addChild(blockArray[k]);
    }
}

function gameLoop(){

}

(function main() {
    setupCanvas();
    loadFiles();
})();
