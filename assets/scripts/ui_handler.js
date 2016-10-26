this.UiHandler = this.UiHandler || {};

(function(){

  UiHandler.guiStatBars = [];

  let clearBars = () => {
    UiHandler.guiStatBars.forEach((bar) => {
      stage.removeChild(bar.obj);
      stage.removeChild(bar.text);
    });
    UiHandler.guiStatBars = [];
  }

  UiHandler.clearBars = clearBars;

  let initBar = (x,y,hex,getCurrentCallback,max,title) => {
    let s = new createjs.Shape(new createjs.Graphics().beginFill(hex).rect(x ,y,100,30));
    console.log(y);
    let bar = s.clone();
    bar.x -= 20;
    bar.y -= 20;
    let t = new createjs.Text(title, "20px Century Gothic", "#000000");
    t.x = x + 12;
    t.y = y - 8;
    let text = t.clone();
    console.log(bar);
    stage.addChild(bar);
    stage.addChild(text);
    UiHandler.guiStatBars.push({
      obj:bar,
      text:t,
      current:getCurrentCallback,
      max:max,
      x:x,
      y:y
    });
  }

  UiHandler.initBar = initBar;

  let updateGui = () =>{
  UiHandler.guiStatBars.forEach(function(bar){
    const percentage = (bar.current() / bar.max);
    bar.obj.scaleX = percentage;
    bar.obj.x = bar.x + (bar.x - (percentage * bar.x));
  });

}

UiHandler.updateGui = updateGui;
}());
