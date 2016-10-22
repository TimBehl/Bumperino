this.MouseHandler = this.MouseHandler || {};
(function(){
  let mouseX,
      mouseY,
      mouseText;

  let removeMouseText = () => {
      stage.removeChild(mouseText);
  }

  MouseHandler.removeMouseText = removeMouseText;

  let mouseUpdate = () => {
      stage.on("stagemousemove", (evt) => {
          mouseX = Math.floor(evt.stageX);
          mouseY = Math.floor(evt.stageY);
      });
  }

  MouseHandler.mouseUpdate = mouseUpdate;

  let addMouseText = () => {
      stage.removeChild(mouseText);
      mouseText = new createjs.Text("X: " + mouseX + ", Y: " + mouseY, "12px Arial", "#000");
      mouseText.x = 10;
      mouseText.y = 50;
      stage.addChild(mouseText);
  }

  MouseHandler.addMouseText = addMouseText;
}());
