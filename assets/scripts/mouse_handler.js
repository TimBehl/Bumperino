this.mouseHandler = this.mouseHandler || {};
(function(){
  let mouseX,
      mouseY,
      mouseText;

  let removeMouseText = () => {
      stage.removeChild(mouseText);
  }

  mouseHandler.removeMouseText = removeMouseText;

  let mouseUpdate = () => {
      stage.on("stagemousemove", (evt) => {
          mouseX = Math.floor(evt.stageX);
          mouseY = Math.floor(evt.stageY);
      });
  }

  mouseHandler.mouseUpdate = mouseUpdate;

  let addMouseText = () => {
      stage.removeChild(mouseText);
      mouseText = new createjs.Text("X: " + mouseX + ", Y: " + mouseY, "12px Arial", "#000");
      mouseText.x = 10;
      mouseText.y = 50;
      stage.addChild(mouseText);
  }

  mouseHandler.addMouseText = addMouseText;
}());
