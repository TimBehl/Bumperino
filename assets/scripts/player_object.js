Player = (color) => {
  //PLAYER COLOR
  this.color = color || "red";
  //PLAYER SPRITE OBJECT
  let sprite = new createjs.Sprite(spriteSheets.playerCar, (this.color + "Idle"));
  this.sprite = sprite.clone();
  stage.addChild(this.sprite);
  //PLAYER PROPERTIES
  this.vel = {x: 0, y: 0};
  this.dir = {x: 0, y: 0};
  this.health = 100;
  this.boosting = false;
}

Player.prototype.movePlayer = () => {
  //Update player position on velocity
  this.sprite.x += this.vel.x;
  this.sprite.y += this.vel.y;
  if(!this.boosting){
    this.vel.x -= 4;
    this.vel.y -= 4;
  }
}

Player.prototype.rotatePlayer = (deltaAng) => {
  this.sprite.rotation = deltaAng;
}

Player.prototype.boostPlayer = () => {
  
}
