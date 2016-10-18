var score = 0;
var scoreText;

function resetScore(){
    stage.removeChild(scoreText);
    score = 0;
}

function addScoreText(){
    stage.removeChild(scoreText);
    scoreText = new createjs.Text("Score: " + score, "12px Arial", "#000");
    scoreText.x = 10;
    scoreText.y = 550;
    stage.addChild(scoreText);
}

function scoreUpdate(scoreChange){
    score += scoreChange;
    addScoreText();
}