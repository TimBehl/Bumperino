function Player(color) {
  //PLAYER COLOR
  this.color = color || "red";
  //PLAYER SPRITE OBJECT
  let sprite = new createjs.Sprite(spriteSheets.playerCar, (this.color + "Idle"));
  this.sprite = sprite.clone();
  stage.addChild(this.sprite);
  //PLAYER PROPERTIES
  this.vel = 0;
  this.health = 100;
  //MOVEMENT IT STORED IN NUMBERS RATHER THAN BOOLEANS
  //POSITIVES WOULD BE FORWARD/CLOCKWISE
  //NEG WOULD BE BACK/COUNTERCLOCKWISE
  //0 WOULD BE NO MOVEMENT
  this.movement = {
    forward: 0,
    turning: 0,
    boosting: 0
  }
}

Player.prototype.movePlayer = function() {

  //Accelerating player
  this.vel += 1 * this.movement.forward;
  if(this.vel > 30){
    this.vel = 30;
  } else if (this.vel < -30){
    this.vel = -30;
  }

  if(this.movement.forward === 0){
    const direction = (this.vel >= 0) ? -0.5 : 0.5;
    if(this.vel !== 0){
      this.vel += direction;
    }
  }

  //Rotating player
  const tighterTurnRadius = (this.vel / 4);
  this.sprite.rotation += this.movement.turning * tighterTurnRadius;

  //Updating pos
  let pt = this.sprite.localToGlobal(this.vel,0);
  let delta = {
    x: (pt.x - this.sprite.x),
    y: (pt.y - this.sprite.y)
  }
  //Update player position on velocity
  this.sprite.x += delta.x;
  this.sprite.y += delta.y;


}

Player.prototype.rotatePlayer = function(deltaAng) {
  this.movement.turning = deltaAng;
}

Player.prototype.acceleratePlayer = function(mod) {
  this.movement.forward = mod;
}
