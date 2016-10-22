this.GameHandler = this.GameHandler || {};
(function(){
  GameHandler.init = false; //GameHandler has not be called.

  let initGame = (twoPlayers) => {
    GameHandler.activePlayers = [];
    GameHandler.activeAI = [];
    GameHandler.powerups = [];
    loadPlayers(twoPlayers);
    GameHandler.init = true;
  }

  GameHandler.initGame = initGame;

  let playerAccelerating = (index, forward) => {
    if(GameHandler.activePlayers[index]){
      let mod = forward ? 1 : -1;
      GameHandler.activePlayers[index].acceleratePlayer(mod);
    }
  }

  GameHandler.playerAccelerating = playerAccelerating;

  let playerTurning = (index, clockwise) => {
    if(GameHandler.activePlayers[index]){
      let mod = clockwise ? 1 : -1;
      GameHandler.activePlayers[index].rotatePlayer((5 * mod));
    }
  }

  GameHandler.playerTurning = playerTurning;

  let gameLoop = () => {
    GameHandler.activePlayers.forEach((car) => {
      car.movePlayer();
    });
  }

  GameHandler.gameLoop = gameLoop;

  let loadPlayers = (twoPlayers, startPos, startPosTwo) => {

    const player1Pos = startPos || {x:100,y:100};
    const player2Pos = startPosTwo || {x:700,y:500};

    let player1 = new Player("red");
    player1.sprite.x = player1Pos.x;
    player1.sprite.y = player1Pos.y;
    player1.sprite.scaleX = 0.4;
    player1.sprite.scaleY = 0.4;
    GameHandler.activePlayers.push(player1);

    if(twoPlayers){
      let player2 = new Player("red");
      player2.sprite.x = player2Pos.x;
      player2.sprite.y = player2Pos.y;
      player2.sprite.scaleX = 0.4;
      player2.sprite.scaleY = 0.4;
      player2.rotatePlayer(180);
      GameHandler.activePlayers.push(player2);
    }

    console.log(GameHandler.activePlayers);
  }


}());
