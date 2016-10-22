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
  this.boosting = false;
  this.moving = false;
}

Player.prototype.movePlayer = function() {
  let pt = this.sprite.localToGlobal(this.vel,0);
  let delta = {
    x: (pt.x - this.sprite.x),
    y: (pt.y - this.sprite.y)
  }
  //Update player position on velocity
  this.sprite.x += delta.x;
  this.sprite.y += delta.y;
  // if(!this.moving){
  //   this.vel.x -= 4;
  //   this.vel.y -= 4;
  // }

}

Player.prototype.rotatePlayer = function(deltaAng) {
  console.log(deltaAng + this.vel);
  this.sprite.rotation += deltaAng;
}

Player.prototype.acceleratePlayer = function(mod) {
  this.vel += 1 * mod;
  if(this.vel > 15){
    this.vel = 15;
  } else if (this.vel < -15){
    this.vel = -15;
  }
}
