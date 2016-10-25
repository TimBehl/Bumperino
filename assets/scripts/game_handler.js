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
    const stopping = (typeof forward === "undefined") ? 1 : 0;
    if(GameHandler.activePlayers[index]){
      let mod = forward ? 1 : -1;
      GameHandler.activePlayers[index].acceleratePlayer(mod + stopping);
    }
  }

  GameHandler.playerAccelerating = playerAccelerating;

  let playerTurning = (index, clockwise) => {
    const stopping = (typeof clockwise === "undefined") ? 1 : 0;
    if(GameHandler.activePlayers[index]){
      let mod = clockwise ? 1 : -1;
      GameHandler.activePlayers[index].rotatePlayer(mod + stopping);
    }
  }

  GameHandler.playerTurning = playerTurning;

  let gameLoop = () => {
    GameHandler.activePlayers.forEach((car) => {
      car.movePlayer();
    });
    bumbieTheStumpies();
  }

  GameHandler.gameLoop = gameLoop;

  let bumbieTheStumpies = () => {
    //Players hit players
    //Get their vel find out their direction
    GameHandler.activePlayers.forEach((ent, index, arr) => {
      let hitWall = false;
      const local = ent.sprite.localToLocal(10,0,ImageHandler.currentMap);
      if(ndgmr.checkPixelCollision(ent.sprite, ImageHandler.currentMap, 0, true)){
        const dir = (ent.vel > 0) ? -1 : 1;
        ent.vel = (ent.vel * -1) + (80 * dir);
        hitWall = true;
      }
      if(!hitWall && !ent.collided){
        arr.filter((f) => {return f !== ent}).forEach((otherEnt) => {
          if(ndgmr.checkPixelCollision(ent.sprite, otherEnt.sprite, 0, true)){
            const otherEntLocal = otherEnt.sprite.localToGlobal(2000,0);
            const entLocal = ent.sprite.localToGlobal(-2000,0);
            //const dir = (ent.vel > 0) ? -1 : 1;
            //CHECK VEL TIE
            if(Math.abs(ent.vel) > Math.abs(otherEnt.vel)){
              // ent.sprite.x = pt_ent.x;
              // ent.sprite.y = pt_ent.y;
              // otherEnt.sprite.x = pt_ent.x;
              // otherEnt.sprite.y = pt_ent.y;
              // ent.vel = (ent.vel * -1);
              const delta = ent.vel;
              otherEnt.sprite.rotation = ent.sprite.rotation;
              otherEnt.vel = (delta * 100);
              ent.vel = ent.vel / 100;
              otherEnt.collided = true;
            }
          }
        });
      }
    });
    GameHandler.activePlayers.filter((f) => {return (f.collided === true)}).forEach((ent) => {
      ent.collideRegen += 1;
      if(ent.collideRegen > ent.collideRegenMax){
        ent.collided = false;
        ent.collideRegen = 0;
      }
    });
  }

  let loadPlayers = (twoPlayers, startPos, startPosTwo) => {

    const player1Pos = startPos || {x:100,y:100};
    const player2Pos = startPosTwo || {x:700,y:500};

    let player1 = new Player("red");
    player1.sprite.x = player1Pos.x;
    player1.sprite.y = player1Pos.y;
    player1.sprite.scaleX = 0.25;
    player1.sprite.scaleY = 0.25;
    GameHandler.activePlayers.push(player1);

    if(twoPlayers){
      let player2 = new Player("blue");
      player2.sprite.x = player2Pos.x;
      player2.sprite.y = player2Pos.y;
      player2.sprite.scaleX = 0.25;
      player2.sprite.scaleY = 0.25;
      player2.sprite.rotation = 180;
      GameHandler.activePlayers.push(player2);
    }

    console.log(GameHandler.activePlayers);
  }


}());
