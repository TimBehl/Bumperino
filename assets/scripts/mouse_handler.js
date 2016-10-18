var mouseX, mouseY, mouseText;

function removeMouseText(){
    stage.removeChild(mouseText);
}

function mouseUpdate() {
    stage.on("stagemousemove", function(evt) {
        mouseX = Math.floor(evt.stageX);
        mouseY = Math.floor(evt.stageY);
    });
}

function addMouseText(){
    stage.removeChild(mouseText);
    mouseText = new createjs.Text("X: " + mouseX + ", Y: " + mouseY, "12px Arial", "#000");
    mouseText.x = 10;
    mouseText.y = 50;
    stage.addChild(mouseText);
}