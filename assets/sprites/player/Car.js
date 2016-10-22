(function(window) {
Car = function() {
	this.initialize();
}
Car._SpriteSheet = new createjs.SpriteSheet({images: ["Car.png"], frames: []});
var Car_p = Car.prototype = new createjs.Sprite();
Car_p.Sprite_initialize = Car_p.initialize;
Car_p.initialize = function() {
	this.Sprite_initialize(Car._SpriteSheet);
	this.paused = false;
}
window.Car = Car;
}(window));
