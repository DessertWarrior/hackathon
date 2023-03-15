document.onkeydown = handlekeyDOWN;
document.onkeyup = handlekeyUP;
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
function init()
{
    var stage = new createjs.Stage('demoCanvas');
    var circle = new createjs.Shape();
    
    // var back = new createjs.Shape();
    // back.graphics.beginBitmapFill("./image/file.jpg",'repeat').drawRect(0,0,stage.canvas.width,stage.canvas.height);
    // back.x=0;back.y=0;
    //stage.addChild(back);
    circle.graphics.beginFill('red').drawCircle(0,0,40);
    circle.x=stage.canvas.width/2;
    circle.y = stage.canvas.height /2;
    let tick =  function()
    {
      if (moveRight && circle.x < stage.canvas.width - 20)
        circle.x += 5;
      else if (moveLeft && circle.x > 0)
        circle.x -= 5;
      else if (moveUp && circle.y >  0)
        circle.y -= 5;
      else if (moveDown && circle.y < stage.canvas.height - 20)
        circle.y += 5;
      stage.update();

    }
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', tick);
      var bitmap = new createjs.Bitmap("./image/file.jpg");
      bitmap.x = 0;
      bitmap.y = 0;
      stage.addChild(bitmap);
      stage.addChild(circle);
      
      // createjs.Ticker.on("tick", unitMove);
      // createjs.Ticker.framerate =  60;
      // let menifest = [
      //   {"src": 'background.jpg', 'id': 'background'},
      //   {"src": 'platform.jpg', 'id': 'background'},
      //   {"src": 'character.jpg', 'id': 'background'},
      // ]
}
function handlekeyUP(e)
{
  if (!e) var e = window.event;
  switch(e.keyCode) {
    case 87:  //up
    moveUp = false;  
    break;
    case 83:  //down
    moveDown = false;
    break;
    case 68:  //right
    moveRight= false;
    break;
    case 65:  //left
    moveLeft = false;
    break;
  }
}
function handlekeyDOWN(e)
{
  if (!e) var e = window.event;
  switch(e.keyCode) {
    case 87:  //up
    moveUp = true;  
    break;
    case 83:  //down
    moveDown = true;
    break;
    case 68:  //right
    moveRight= true;
    break;
    case 65:  //left
    moveLeft = true;
    break;
  }
}
// function handleImageLoad(e) {
//   var framedata = {

//   }
// }