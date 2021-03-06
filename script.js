var stage;
var queue;
var titleScreen, gameScreen, instructionScreen, gameoverScreen, mapScreen, mapOneScreen, mapTwoScreen, mapThreeScreen, mapFourScreen, mapFiveScreen, optionScreen;
var menuButton, instructionButton, vsAIButton, vsPlayerButton, mapOneButton, mapTwoButton, mapThreeButton, mapFourButton, mapFiveButton, rematchButton, optionButton, soundMuteButton, soundUnmuteButton, musicMuteButton, musicUnmuteButton;
var blockSheet, blockSprite;
var boostImage;
var menuMusic, gameMusic, engineSound;
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
    {src:"images/rematchbutton.png", id:"rematchbutton"},
    {src:"images/vsAIbutton.png", id:"vsAI"},
    {src:"images/vsplayerbutton.png", id:"vsPlayer"},
    {src:"images/mapone.png", id:"mapone"},
    {src:"images/maptwo.png", id:"maptwo"},
    {src:"images/mapthree.png", id:"mapthree"},
    {src:"images/mapfour.png", id:"mapfour"},
    {src:"images/mapfive.png", id:"mapfive"},
    {src:"images/maponebutton.png", id:"maponebutton"},
    {src:"images/maptwobutton.png", id:"maptwobutton"},
    {src:"images/mapthreebutton.png", id:"mapthreebutton"},
    {src:"images/mapfourbutton.png", id:"mapfourbutton"},
    {src:"images/mapfivebutton.png", id:"mapfivebutton"},
    {src:"images/optionscreen.jpg", id:"optionscreen"},
    {src:"images/optionbutton.png", id:"optionbutton"},
    {src:"images/mutebutton.png", id:"mutebutton"},
    {src:"images/unmutebutton.png", id:"unmutebutton"},
    {src:"sprites/player/Car.png", id:"playerCar"},
    {src:"images/speedup.png", id:"speedup"},
    {src:"sound/OldAceRace.mp3", id:"oldacerace"},
    {src:"sound/SputnikWasGreatOnce.mp3", id:"sputnikwasgreatonce"},
    {src:"sound/dmg_impact.mp3", id:"impact"},
    {src:"sound/buttonPress.wav", id:"button"},
    {src:"sound/soundscrate-explosionboom5.mp3", id:"explosion"},
    {src:"sound/soundscrate-tankengine-loop.mp3", id:"engine"},
    {src:"sound/soundscrate-videogamebundle-victory.mp3", id:"boost"},
    {src:"scripts/sound_handler.js"},
    {src:"scripts/image_handler.js"},
    {src:"scripts/key_handler.js"},
    {src:"scripts/mouse_handler.js"},
    {src:"scripts/game_timer.js"},
    {src:"scripts/score_handler.js"},
    {src:"scripts/button_handler.js"},
    {src:"scripts/game_handler.js"},
    {src:"scripts/player_object.js"},
    {src:"scripts/switch.js"},
    {src:"scripts/ndgmr.Collision.js"},
    {src:"scripts/powerup_handler.js"},
    {src:"scripts/ui_handler.js"}
];

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["wav"];
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function loadComplete(evt){
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    gameScreen = new createjs.Bitmap(queue.getResult("game"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instruction"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    mapScreen = new createjs.Bitmap(queue.getResult("mapselect"));
    optionScreen = new createjs.Bitmap(queue.getResult("optionscreen"));
    mapOneScreen = new createjs.Bitmap(queue.getResult("mapone"));
    mapOneButton = new createjs.Bitmap(queue.getResult("maponebutton"));
    mapTwoScreen = new createjs.Bitmap(queue.getResult("maptwo"));
    mapTwoButton = new createjs.Bitmap(queue.getResult("maptwobutton"));
    mapThreeScreen = new createjs.Bitmap(queue.getResult("mapthree"));
    mapThreeButton = new createjs.Bitmap(queue.getResult("mapthreebutton"));
    mapFourScreen = new createjs.Bitmap(queue.getResult("mapfour"));
    mapFourButton = new createjs.Bitmap(queue.getResult("mapfourbutton"));
    mapFiveScreen = new createjs.Bitmap(queue.getResult("mapfive"));
    mapFiveButton = new createjs.Bitmap(queue.getResult("mapfivebutton"));
    menuButton = new createjs.Bitmap(queue.getResult("menubutton"));
    instructionButton = new createjs.Bitmap(queue.getResult("instructionbutton"));
    vsAIButton = new createjs.Bitmap(queue.getResult("vsAI"));
    vsPlayerButton = new createjs.Bitmap(queue.getResult("vsPlayer"));
    rematchButton = new createjs.Bitmap(queue.getResult("rematchbutton"));
    boostImage = new createjs.Bitmap(queue.getResult("speedup"));
    optionButton = new createjs.Bitmap(queue.getResult("optionbutton"));
    soundMuteButton = new createjs.Bitmap(queue.getResult("mutebutton"));
    soundUnmuteButton = new createjs.Bitmap(queue.getResult("unmutebutton"));
    musicMuteButton = new createjs.Bitmap(queue.getResult("mutebutton"));
    musicUnmuteButton = new createjs.Bitmap(queue.getResult("unmutebutton"));
    gameMusic = createjs.Sound.play("oldacerace", {interrupt: createjs.Sound.INTERRUPT_ANY, volume: .5, loop: -1});
    createjs.Sound.stop(gameMusic);
    engineSound = createjs.Sound.play("engine", {volume: .05, loop: -1});
    engineSound.muted = true;
    menuMusic = createjs.Sound.play("sputnikwasgreatonce", {interrupt: createjs.Sound.INTERRUPT_ANY, volume: .5, loop: -1});
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

(function main() {
    setupCanvas();
    loadFiles();
})();
