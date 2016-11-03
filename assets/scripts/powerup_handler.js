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

  let addMapOneBoosts = () => {
    var xOne = 235;
    var yOne = 380;
    var tempBoostOne = new Boost(xOne, yOne);
    var tempIndexOne = PowerUpHandler.boosts.push(tempBoostOne);
    stage.addChild(PowerUpHandler.boosts[tempIndexOne-1].image);

    var xTwo = 535;
    var yTwo = 190;
    var tempBoostTwo = new Boost(xTwo, yTwo);
    var tempIndexTwo = PowerUpHandler.boosts.push(tempBoostTwo);
    stage.addChild(PowerUpHandler.boosts[tempIndexTwo-1].image);

    var xThree = 375;
    var yThree = 275;
    var tempBoostThree = new Boost(xThree, yThree);
    var tempIndexThree = PowerUpHandler.boosts.push(tempBoostThree);
    stage.addChild(PowerUpHandler.boosts[tempIndexThree-1].image);
  }

  PowerUpHandler.addMapOneBoosts = addMapOneBoosts;

  let addMapTwoBoosts = () => {
    var xOne = 390;
    var yOne = 100;
    var tempBoostOne = new Boost(xOne, yOne);
    var tempIndexOne = PowerUpHandler.boosts.push(tempBoostOne);
    stage.addChild(PowerUpHandler.boosts[tempIndexOne-1].image);

    var xTwo = 200;
    var yTwo = 290;
    var tempBoostTwo = new Boost(xTwo, yTwo);
    var tempIndexTwo = PowerUpHandler.boosts.push(tempBoostTwo);
    stage.addChild(PowerUpHandler.boosts[tempIndexTwo-1].image);

    var xThree = 390;
    var yThree = 475;
    var tempBoostThree = new Boost(xThree, yThree);
    var tempIndexThree = PowerUpHandler.boosts.push(tempBoostThree);
    stage.addChild(PowerUpHandler.boosts[tempIndexThree-1].image);

    var xFour = 575;
    var yFour = 290;
    var tempBoostFour = new Boost(xFour, yFour);
    var tempIndexFour = PowerUpHandler.boosts.push(tempBoostFour);
    stage.addChild(PowerUpHandler.boosts[tempIndexFour-1].image);
  }

  PowerUpHandler.addMapTwoBoosts = addMapTwoBoosts;

  let addMapThreeBoosts = () => {
    var xOne = 200;
    var yOne = 100;
    var tempBoostOne = new Boost(xOne, yOne);
    var tempIndexOne = PowerUpHandler.boosts.push(tempBoostOne);
    stage.addChild(PowerUpHandler.boosts[tempIndexOne-1].image);

    var xTwo = 200;
    var yTwo = 500;
    var tempBoostTwo = new Boost(xTwo, yTwo);
    var tempIndexTwo = PowerUpHandler.boosts.push(tempBoostTwo);
    stage.addChild(PowerUpHandler.boosts[tempIndexTwo-1].image);

    var xThree = 375;
    var yThree = 275;
    var tempBoostThree = new Boost(xThree, yThree);
    var tempIndexThree = PowerUpHandler.boosts.push(tempBoostThree);
    stage.addChild(PowerUpHandler.boosts[tempIndexThree-1].image);

    var xFour = 600;
    var yFour = 100;
    var tempBoostFour = new Boost(xFour, yFour);
    var tempIndexFour = PowerUpHandler.boosts.push(tempBoostFour);
    stage.addChild(PowerUpHandler.boosts[tempIndexFour-1].image);

    var xFive = 600;
    var yFive = 500;
    var tempBoostFive = new Boost(xFive, yFive);
    var tempIndexFive = PowerUpHandler.boosts.push(tempBoostFive);
    stage.addChild(PowerUpHandler.boosts[tempIndexFive-1].image);
  }

  PowerUpHandler.addMapThreeBoosts = addMapThreeBoosts;

  let addMapFourBoosts = () => {
    var xOne = 495;
    var yOne = 195;
    var tempBoostOne = new Boost(xOne, yOne);
    var tempIndexOne = PowerUpHandler.boosts.push(tempBoostOne);
    stage.addChild(PowerUpHandler.boosts[tempIndexOne-1].image);

    var xTwo = 285;
    var yTwo = 195;
    var tempBoostTwo = new Boost(xTwo, yTwo);
    var tempIndexTwo = PowerUpHandler.boosts.push(tempBoostTwo);
    stage.addChild(PowerUpHandler.boosts[tempIndexTwo-1].image);

    var xThree = 285;
    var yThree = 385;
    var tempBoostThree = new Boost(xThree, yThree);
    var tempIndexThree = PowerUpHandler.boosts.push(tempBoostThree);
    stage.addChild(PowerUpHandler.boosts[tempIndexThree-1].image);

    var xFour = 495;
    var yFour = 385;
    var tempBoostFour = new Boost(xFour, yFour);
    var tempIndexFour = PowerUpHandler.boosts.push(tempBoostFour);
    stage.addChild(PowerUpHandler.boosts[tempIndexFour-1].image);
  }

  PowerUpHandler.addMapFourBoosts = addMapFourBoosts;

  let addMapFiveBoosts = () => {
    var xOne = 235;
    var yOne = 380;
    var tempBoostOne = new Boost(xOne, yOne);
    var tempIndexOne = PowerUpHandler.boosts.push(tempBoostOne);
    stage.addChild(PowerUpHandler.boosts[tempIndexOne-1].image);

    var xTwo = 535;
    var yTwo = 190;
    var tempBoostTwo = new Boost(xTwo, yTwo);
    var tempIndexTwo = PowerUpHandler.boosts.push(tempBoostTwo);
    stage.addChild(PowerUpHandler.boosts[tempIndexTwo-1].image);
  }

  PowerUpHandler.addMapFiveBoosts = addMapFiveBoosts;

  let clearBoosts = () => {
    for(var i = 0; i < PowerUpHandler.boosts.length; i++){
      stage.removeChild(PowerUpHandler.boosts[i].image);
    }
    PowerUpHandler.boosts = [];
  }

  PowerUpHandler.clearBoosts = clearBoosts;

})();
