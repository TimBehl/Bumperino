this.GameHandler = this.GameHandler || {};
(function(){
  GameHandler.init = false; //GameHandler has not be called.

  let initGame = (twoPlayers) => {
    GameHandler.activePlayers = [];
    GameHandler.activeAI = [];
    GameHandler.powerups = [];
    loadPlayers(twoPlayers);
    GameHandler.init = true;
    UiHandler.initBar(10, 40, "#FF0000", function(){return GameHandler.activePlayers[0].health}, 200, "P1 Health");
    UiHandler.initBar(10, 75, "#FF0000", function(){return GameHandler.activePlayers[1].health}, 200, "P2 Health");
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

  let playerBoosting = (index, FUCKINGPUNCHINGITHOLYSHITWERETOOFASTWEREGONACRASHHALP) => {
    if(GameHandler.activePlayers[index].boostMeter > 0){
      GameHandler.activePlayers[index].holyShitWeHitTheBoosterOnThisOneBois = FUCKINGPUNCHINGITHOLYSHITWERETOOFASTWEREGONACRASHHALP;
      if(GameHandler.activePlayers[index].sprite.currentAnimation !== GameHandler.activePlayers[index].color + "Boost" && (FUCKINGPUNCHINGITHOLYSHITWERETOOFASTWEREGONACRASHHALP)){
        GameHandler.activePlayers[index].sprite.gotoAndPlay(GameHandler.activePlayers[index].color.toString() + "Boost");
      } else {
        GameHandler.activePlayers[index].sprite.gotoAndPlay(GameHandler.activePlayers[index].color.toString() + "Idle");
      }
    } else {
      GameHandler.activePlayers[index].holyShitWeHitTheBoosterOnThisOneBois = false;
      if(GameHandler.activePlayers[index].sprite.currentAnimation !== GameHandler.activePlayers[index].color + "Idle"){
        GameHandler.activePlayers[index].sprite.gotoAndPlay(GameHandler.activePlayers[index].color.toString() + "Idle");
      }
    }
  }

  GameHandler.playerBoosting = playerBoosting;

  let gameLoop = () => {
    GameHandler.activePlayers.forEach((car) => {
      car.movePlayer();
    });
    bumbieTheStumpies();
    hasGloryBeenShedOnTheBattleField();
    UiHandler.updateGui();
    GameTimer.runGameTimer();
    if(GameTimer.timer % 10 == 0){
      PowerUpHandler.addRandomBoost();
    }
  }

  GameHandler.gameLoop = gameLoop;

  let cleanUp = () => {
    GameHandler.activePlayers.forEach((ent) => {
      stage.removeChild(ent.sprite);
    });
    GameHandler.activePlayers = [];
    GameHandler.init = false;
    UiHandler.clearBars();
  }

  GameHandler.cleanUp = cleanUp;

  let hasGloryBeenShedOnTheBattleField = () => {
    //Sets state if victory
    const remaningWarriors = GameHandler.activePlayers.filter((f) => {return f.health >= 0});
    if(remaningWarriors.length === 1){
      Switch.currentState = remaningWarriors[0].color.toString().toUpperCase() + "WIN";
    }
  }

  let bumbieTheStumpies = () => {
    //Players hit players
    //Get their vel find out their direction
    GameHandler.activePlayers.forEach((ent, index, arr) => {
      let hitWall = false;
      PowerUpHandler.boosts.forEach((boot,index) => {
        if(ndgmr.checkPixelCollision(ent.sprite, boot.image)){
          boot.used = true;
          ent.boostMeter += 15;
          ent.boostMeter = (ent.boostMeter > 100) ? 100 : ent.boostMeter;
          stage.removeChild(boot.image);
          }
        });
      PowerUpHandler.boosts = PowerUpHandler.boosts.filter((f) => {return f.used === false});
      if(ndgmr.checkPixelCollision(ent.sprite, ImageHandler.currentMap, 0, true)){
        const local = ent.sprite.localToGlobal((ent.vel * -1),0);
        const dir = (ent.vel > 0) ? -1 : 1;
        ent.vel = (ent.vel * -1);
        ent.sprite.x = local.x;
        ent.sprite.y = local.y;
        ent.health -= Math.abs(ent.vel);
        hitWall = true;
      }
      if(!hitWall && !ent.collided){
        arr.filter((f) => {return f !== ent}).forEach((otherEnt) => {
          if(!otherEnt.collided && ndgmr.checkPixelCollision(ent.sprite, otherEnt.sprite, 0, true)){
            //CHECK VEL TIE
            if(Math.abs(ent.vel) > Math.abs(otherEnt.vel)){
              const delta = ent.vel;
              const damageMod = (ent.holyShitWeHitTheBoosterOnThisOneBois) ? 1.5 : 1;
              const local = ent.sprite.localToGlobal((ent.vel * -1.5),0);
              otherEnt.health -= (Math.abs(delta * damageMod) - otherEnt.vel);
              otherEnt.sprite.rotation = ent.sprite.rotation;
              otherEnt.vel = (delta * 100);
              ent.vel = ent.vel / 100;
              ent.sprite.x = local.x;
              ent.sprite.y = local.y;
              otherEnt.collided = true;
              otherEnt.sprite.alpha = 0.7;
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
        ent.sprite.alpha = 1;
      }
    });
  }

  let loadPlayers = (twoPlayers, startPos, startPosTwo) => {

    const player1Pos = startPos || {x:100,y:100};
    const player2Pos = startPosTwo || {x:700,y:500};

    let player1 = new Player("red");
    player1.sprite.x = player1Pos.x;
    player1.sprite.y = player1Pos.y;
    player1.sprite.scaleX = 0.3;
    player1.sprite.scaleY = 0.3;
    GameHandler.activePlayers.push(player1);
    if(twoPlayers){
      let player2 = new Player("blue");
      player2.sprite.x = player2Pos.x;
      player2.sprite.y = player2Pos.y;
      player2.sprite.scaleX = 0.3;
      player2.sprite.scaleY = 0.3;
      player2.sprite.rotation = 180;
      GameHandler.activePlayers.push(player2);
    }

    console.log(GameHandler.activePlayers);
  }


}());
