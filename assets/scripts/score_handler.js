this.ScoreHandler = this.ScoreHandler || {};

(function(){
    let redScore = 0;
    let blueScore = 0;
    let scoreText;
    
    let resetScore = () => {
        stage.removeChild(scoreText);
        redScore = 0;
        blueScore = 0;
    }
    
    ScoreHandler.resetScore = resetScore;
    
    let addScoreText = () => {
        stage.removeChild(scoreText);
        scoreText = new createjs.Container();
        var redText = new createjs.Text(redScore, "54px Arial", "#FFF");
        redText.x = 240;
        redText.y = 210;
        var blueText = new createjs.Text(blueScore, "54px Arial", "#FFF");
        blueText.x = 510;
        blueText.y = 210;
        scoreText.addChild(redText);
        scoreText.addChild(blueText);
        stage.addChild(scoreText);
    }
    
    ScoreHandler.addScoreText = addScoreText;
    
    let removeScoreText = () => {
        stage.removeChild(scoreText);
    }
    
    ScoreHandler.removeScoreText = removeScoreText;
    
    let scoreUpdate = (redChange, blueChange) => {
        redScore += redChange;
        blueScore += blueChange;
        addScoreText();
    }
    
    ScoreHandler.scoreUpdate = scoreUpdate;
}());
