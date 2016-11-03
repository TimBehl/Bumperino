this.GameHandler = this.GameHandler || {};
(function(){
  GameHandler.init = false; //GameHandler has not be called.
  GameHandler.deathAnimation = {
    timer: 30,
    started: false,
    victor: null
  };

  let initGame = (twoPlayers) => {
    GameHandler.activePlayers = [];
    GameHandler.activeAI = [];
    GameHandler.powerups = [];
    loadPlayers(twoPlayers);
    GameHandler.init = true;
    UiHandler.initBar(10, 40, "#FF0000", function(){return GameHandler.activePlayers[0].health}, 200, "P1 Health");
    UiHandler.initBar(10, 70, "#fdbb1e", function(){return GameHandler.activePlayers[0].boostMeter}, 100, "", 0.5);
    UiHandler.initBar(670, 40, "#0000FF", function(){return GameHandler.activePlayers[1].health}, 200, "P2 Health");
    UiHandler.initBar(670, 70, "#fdbb1e", function(){return GameHandler.activePlayers[1].boostMeter}, 100, "", 0.5);
  }

  GameHandler.initGame = initGame;

  let getDirection = (vel) => {
      let dir = 1;
      if(vel < 0){
        dir = -1;
      }
      return dir;
  }

  let playerAccelerating = (index, forward) => {
    const stopping = (typeof forward === "undefined") ? 1 : 0;
    if(GameHandler.activePlayers[index]){
      let mod = forward ? 1 : -1;
      let dir = getDirection(GameHandler.activePlayers[index].vel);
      let breaks = (dir != mod) ? 4 : 1;
      GameHandler.activePlayers[index].acceleratePlayer((mod + stopping) * breaks);
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
    GameHandler.deathAnimation.timer = 30;
    GameHandler.deathAnimation.victor = null;
    GameHandler.deathAnimation.started = false;
    UiHandler.clearBars();
  }

  GameHandler.cleanUp = cleanUp;

  let hasGloryBeenShedOnTheBattleField = () => {
    //Sets state if victory
    if(GameHandler.deathAnimation.started){
      GameHandler.deathAnimation.timer -= 0.5;
      if(GameHandler.deathAnimation.timer < 0) {
        Switch.currentState = GameHandler.deathAnimation.victor;
      }
    }
    else{
      const remaningWarriors = GameHandler.activePlayers.filter((f) => {return f.health >= 0});
      if(remaningWarriors.length === 1){
        GameHandler.deathAnimation.started = true;
        GameHandler.deathAnimation.victor = remaningWarriors[0].color.toString().toUpperCase() + "WIN";
      }
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
        ent.vel = (ent.vel * -0.3) + (dir * 2);
        ent.sprite.x = local.x - ent.collideVector.x;
        ent.sprite.y = local.y - ent.collideVector.y;
        ent.collideVector = {x: 0, y: 0};
        ent.health -= Math.abs(ent.vel);
        hitWall = true;
      }
      if(!hitWall && !ent.collided){
        arr.filter((f) => {return f !== ent}).forEach((otherEnt) => {
          if(!otherEnt.collided && ndgmr.checkPixelCollision(ent.sprite, otherEnt.sprite, 0, true)){
            //CHECK VEL TIE
            if(Math.abs(ent.vel) > Math.abs(otherEnt.vel)){
              const delta = ent.vel;
              const damageMod = (ent.holyShitWeHitTheBoosterOnThisOneBois) ? 3 : 2;
              const localOffset = ent.sprite.localToGlobal((ent.vel * -2),0);
              const collisionOffset = ent.sprite.localToGlobal((ent.vel * -2),0);
              otherEnt.health -= (Math.abs(delta * damageMod) - otherEnt.vel);
              //otherEnt.sprite.rotation = ent.sprite.rotation;
              //otherEnt.vel = delta;
              ent.vel = ent.vel / 100;
              otherEnt.vel = otherEnt.vel / 4;
              ent.sprite.x = localOffset.x;
              ent.sprite.y = localOffset.y;
              otherEnt.collideVector.x = otherEnt.sprite.x - (collisionOffset.x);
              otherEnt.collideVector.y = otherEnt.sprite.y - (collisionOffset.y);
              console.log(otherEnt.collideVector);
              otherEnt.collided = true;
              otherEnt.sprite.alpha = 0.5;
            } else if(Math.abs(ent.vel) === Math.abs(otherEnt.vel)){
              const delta = ent.vel;
              const damageMod = (ent.holyShitWeHitTheBoosterOnThisOneBois) ? 1.5 : 1;

              otherEnt.health -= (Math.abs(delta * damageMod));
              ent.health -= (Math.abs(delta * damageMod));
              otherEnt.sprite.rotation = otherEnt.sprite.rotation * 2;
              otherEnt.sprite.rotation = ent.sprite.rotation * 2;

              otherEnt.vel = (delta * 10);
              ent.vel = (delta * 10);

              otherEnt.collided = true;
              otherEnt.sprite.alpha = 0.7;

              ent.collided = true;
              ent.sprite.alpha = 0.7;
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
    player1.sprite.scaleX = 0.4;
    player1.sprite.scaleY = 0.4;
    GameHandler.activePlayers.push(player1);
    if(twoPlayers){
      let player2 = new Player("blue");
      player2.sprite.x = player2Pos.x;
      player2.sprite.y = player2Pos.y;
      player2.sprite.scaleX = 0.4;
      player2.sprite.scaleY = 0.4;
      player2.sprite.rotation = 180;
      GameHandler.activePlayers.push(player2);
    }

    console.log(GameHandler.activePlayers);
  }


}());
