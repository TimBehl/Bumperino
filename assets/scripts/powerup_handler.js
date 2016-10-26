function Boost(inputX,inputY) {
  this.image = boostImage.clone();
  this.image.x = inputX;
  this.image.y = inputY;
  this.index = -1;
  this.used = false;
}

Boost.prototype.collide = function(collidingPlayer) {
  stage.removeChild(this.image);
  collidingPlayer.boostMeter += 25;
  PowerUpHandler.boosts.splice(this.index, 1);
}

this.PowerUpHandler = this.PowerUpHandler || {};
(function() {

  PowerUpHandler.boosts = [];

  let addRandomBoost = () => {
    var randX = Math.floor(Math.random() * 680) + 50;
    var randY = Math.floor(Math.random() * 480) + 50;
    var tempBoost = new Boost(randX, randY);
    var tempIndex = PowerUpHandler.boosts.push(tempBoost);
    stage.addChild(PowerUpHandler.boosts[tempIndex-1].image);
  }

  PowerUpHandler.addRandomBoost = addRandomBoost;

  let clearBoosts = () => {
    for(var i = 0; i < PowerUpHandler.boosts.length; i++){
      stage.removeChild(PowerUpHandler.boosts[i].image);
    }
    PowerUpHandler.boosts = [];
  }

  PowerUpHandler.clearBoosts = clearBoosts;

})();
