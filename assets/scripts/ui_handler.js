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

  let initBar = (x,y,hex,getCurrentCallback,max,title, heightMod) => {
    let mod = heightMod || 1;
    console.log(x);
    let s = new createjs.Shape(new createjs.Graphics().beginFill(hex).rect(0 ,0,100,(30 * mod)));
    s.x = x + 10;
    s.y = y - 15;
    s.regX = 0;
    s.regY = 0;
    let modCords = {x: s.x, y: s.y};
    let bar = s.clone();
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
      x:modCords.x,
      y:modCords.y
    });
  }

  UiHandler.initBar = initBar;

  let updateGui = () =>{
    UiHandler.guiStatBars.forEach(function(bar, i){
      const percentage = (bar.current() / bar.max);
      bar.obj.scaleX = percentage;
      //bar.obj.x = bar.x - ((percentage * 10));
      // if(i == 2){
      //   console.log("=======================\n" + bar.x);
      //   console.log(percentage);
      //   console.log(bar.obj.x);
      // }
    });
}

UiHandler.updateGui = updateGui;
}());
