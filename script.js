var stage;
var queue;
var titleScreen, gameScreen, instructionScreen, gameoverScreen, mapScreen;
var menuButton, instructionButton, vsAIButton, vsPlayerButton;
var blockSheet, blockSprite;
var blockArray = [];
var stageHeight = 600;
var stageWidth = 800;

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
    console.log("Everything loaded here boss!");

    blockSheet = new createjs.SpriteSheet({
        "frames": {
            "width": 10,
            "numFrames": 1,
            "regX": 0,
            "regY": 0,
            "height": 10
        },
        "animations": {
            "block": [0,0]
        },
        "images": [queue.getResult("block")]
    });
    blockSprite = new createjs.Sprite(blockSheet);

    Switch.initMainLoop();
}

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = stageWidth;
    canvas.height = stageHeight;
    stage = new createjs.Stage(canvas);
}

function gameLoop(){

}

(function main() {
    setupCanvas();
    loadFiles();
})();
