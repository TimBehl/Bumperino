var stage;
var queue;
var titleScreen, gameScreen, instructionScreen, gameoverScreen;
var menuButton, instructionButton, gameStartButton;
var walkman;

manifest = [
    {src:"images/titlescreen.jpg", id:"title"},
    {src:"images/gamescreen.jpg", id:"game"},
    {src:"images/instructionscreen.jpg", id:"instruction"},
    {src:"images/gameoverscreen.jpg", id:"gameover"},
    {src:"images/menubutton.png", id:"menubutton"},
    {src:"images/instructionbutton.png", id:"instructionbutton"},
    {src:"images/startgamebutton.png", id:"startgamebutton"},
    {src:"images/sprites.png", id:"walkSprite"},
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
    menuButton = new createjs.Bitmap(queue.getResult("menubutton"));
    instructionButton = new createjs.Bitmap(queue.getResult("instructionbutton"));
    gameStartButton = new createjs.Bitmap(queue.getResult("startgamebutton"));
    console.log("Everything loaded here boss!");
    
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("walkSprite")],
        frames: [[160,0,19,49,0,10.05,48.6],[179,0,34,44,0,17.05,43.6],[213,0,22,46,0,9.05,45.6],[235,0,17,49,0,8.05,48.6],[0,49,25,49,0,10.05,48.6],[25,49,31,46,0,14.05,45.6],[56,49,33,44,0,16.05,43.6],[89,49,30,44,0,17.05,43.6],[119,49,28,46,0,17.05,45.6],[147,49,19,49,0,10.05,48.6],[166,49,23,49,0,14.05,48.6],[189,49,31,46,0,16.05,45.6],[220,49,34,44,0,17.05,43.6],[0,98,19,49,0,9.05,48.6],[19,98,34,44,0,17.05,43.6],[53,98,22,46,0,13.05,45.6],[75,98,17,49,0,9.05,48.6],[92,98,25,49,0,15.05,48.6],[117,98,31,46,0,17.05,45.6],[148,98,33,44,0,17.05,43.6],[181,98,30,44,0,13.05,43.6],[211,98,28,46,0,11.05,45.6],[0,147,19,49,0,9.05,48.6],[19,147,23,49,0,9.05,48.6],[42,147,31,46,0,15.05,45.6],[73,147,34,44,0,17.05,43.6]],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [1, 12, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [14, 25, "walkLeft", .5]
            }
        });
    
    walkman = new createjs.Sprite(walkSheet);
    initMainLoop();
}

function displaySprites() {
    walkman.x=100;
    walkman.y=200;
    walkman.gotoAndPlay("walkRight");
    stage.addChild(walkman);
}

function removeSprites(){
    stage.removeChild(walkman);
}

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

function gameLoop(){
    mouseUpdate();
    addMouseText();
    runGameTimer();
    addTimerText();
    addScoreText();
    if(gameTimer%1 === 0){
        scoreUpdate(10);
    }
    if(gameTimer >= 5){
        SWITCH = "GAMEOVER";
    }
}

(function main() {
    setupCanvas();
    loadFiles();
})();