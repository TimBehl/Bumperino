this.ScoreHandler = this.ScoreHandler || {};

(function(){
  let score = 0;
  let scoreText;

  let resetScore = () => {
      stage.removeChild(scoreText);
      score = 0;
  }

  ScoreHandler.resetScore = resetScore;

  let addScoreText = () => {
      stage.removeChild(scoreText);
      scoreText = new createjs.Text("Score: " + score, "12px Arial", "#000");
      scoreText.x = 10;
      scoreText.y = 550;
      stage.addChild(scoreText);
  }

  ScoreHandler.addScoreText = addScoreText;

  let scoreUpdate = (scoreChange) => {
      score += scoreChange;
      addScoreText();
  }

  ScoreHandler.scoreUpdate = scoreUpdate;
}());
