function Player(color) {
  //PLAYER COLOR
  this.color = color || "red";
  //PLAYER SPRITE OBJECT
  let sprite = new createjs.Sprite(spriteSheets.playerCar, (this.color + "Idle"));
  this.sprite = sprite.clone();
  stage.addChild(this.sprite);
  //PLAYER PROPERTIES
  this.vel = 0;
  this.health = 200; //Default 200
  this.collided = false; //True when player is recieving collision
  this.collideRegen = 0;
  this.collideRegenMax = 60;
  this.collideVector = {x: 0, y: 0}
  this.boostMeter = 0;
  this.holyShitWeHitTheBoosterOnThisOneBois = false;
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
  if(this.health <= 0){
    if(this.sprite.currentAnimation != "exploded"){
      this.sprite.gotoAndPlay("exploded");
      this.sprite.alpha = 1;
    }
    return null;
  }
  //Accelerating player
  const timDoesntLikeMeHavingFun = (this.holyShitWeHitTheBoosterOnThisOneBois) ? 5 : 1;
  this.vel += 0.4 * this.movement.forward * timDoesntLikeMeHavingFun;
  if(this.vel > 60 * (timDoesntLikeMeHavingFun / 2)){
    this.vel = 30;
  } else if (this.vel < -60 * (timDoesntLikeMeHavingFun / 2)){
    this.vel = -30;
  }
  //Collision vectors
  // if(this.collideVector.x != 0){
  //   this.collideVector.x -= (this.collideVector.x / this.collideVector.x) * 5;
  // } else if(this.collideVector.y != 0) {
  //   this.collideVector.y -= (this.collideVector.y / this.collideVector.y) * 5;
  // }
  //Using the in property to loop through the properties of collideVector. Ive been told this is the one of the important uses
  for (let pt in this.collideVector){
    if(this.collideVector[pt] != 0){
      this.collideVector[pt] = (this.collideVector[pt] > 0) ? (this.collideVector[pt] - 2) : (this.collideVector[pt] + 2);
    }
    if (Math.abs(this.collideVector[pt]) <= 5){
      this.collideVector[pt] = 0;
    }
  }

  if(this.movement.forward === 0){
    const direction = (this.vel >= 0) ? -0.5 : 0.5;
    if(this.vel !== 0){
      this.vel += direction;
    }
  }

  //Rotating player
  const tighterTurnRadius = (this.vel / 3);
  this.sprite.rotation += this.movement.turning * tighterTurnRadius;

  //Updating pos
  if(this.holyShitWeHitTheBoosterOnThisOneBois) {
    this.boostMeter -= 1;
  }
  let pt = this.sprite.localToGlobal(this.vel,0);
  let delta = {
    x: (pt.x - this.sprite.x) + (this.collideVector.x / 5),
    y: (pt.y - this.sprite.y) + (this.collideVector.y / 5)
  }
  //Update player position on velocity
  this.sprite.x += delta.x;
  this.sprite.y += delta.y;


}

Player.prototype.rotatePlayer = function(deltaAng) {
  const WEREGOINGTOFAST = (this.holyShitWeHitTheBoosterOnThisOneBois) ? 0 : 1;
  this.movement.turning = deltaAng * WEREGOINGTOFAST;
}

Player.prototype.acceleratePlayer = function(mod) {
  this.movement.forward = mod;
}
