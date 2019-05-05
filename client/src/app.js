const Snake = require("./models/snake.js");
const Pellet = require("./models/pellet.js");
const Wall = require("./models/wall.js");

document.addEventListener('DOMContentLoaded',()=>{
  console.log('Hiya');

  const start = function() {
    gameCanvas = document.querySelector("#game-container");
    context = gameCanvas.getContext("2d");
    pellet = new Pellet(30,30,"blue",40,40,context);

    snake = new Snake(30,30,"green",70,50,context);
    snake.speedX+=1;

    leftWall = new Wall(2,300,"red",0,0,context);
    rightWall = new Wall(2,300,"red",298,0,context);
    topWall = new Wall(300,2,"red",0,298,context);
    bottomWall = new Wall(300,2,"red",0,0,context);

    this.interval = setInterval(updateGameArea, 400);

    window.addEventListener('keydown', function (evt) {
      this.pressedKey = evt.keyCode;
    });
    window.addEventListener('keyup', function (evt) {
      this.pressedKey = false;
    });
  }

  function clear(context, gameCanvas) {
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  }

  function updateGameArea() {
    if (hasHitWall()) {
      stop();
      console.log('game over');
    } else {
      clear(context,gameCanvas);

      leftWall.update();
      rightWall.update();
      topWall.update();
      bottomWall.update();
      pellet.update();

      // left arrow is pressed
      if (this.pressedKey == 37 && snake.speedX >0)
        {
          snake.speedX = -snake.speedX
          console.log('left if going right');
        }else if (this.pressedKey == 37 && snake.speedY >0)
        {
          snake.speedX = -snake.speedY
          snake.speedY = 0;
          console.log('left if going down');
        } else if(this.pressedKey == 37 && snake.speedY <0)
        {
          console.log(snake.speedY);
          snake.speedX = snake.speedY;
          snake.speedY = 0;
          console.log('left if going up');
        }

      //right arrow is pressed
      if (this.pressedKey == 39 && snake.speedX <0)
        {
          snake.speedX = -snake.speedX;
          console.log('right if going left');
        }else if (this.pressedKey == 39 && snake.speedY <0)
        {
          snake.speedX = -snake.speedY;
          snake.speedY = 0;
          console.log('right if going up');
        } else if (this.pressedKey == 39 && snake.speedY >0)
        {
          snake.speedX = snake.speedY;
          snake.speedY = 0;
          console.log('right if going down');
        }

      //up arrow is pressed
      if (this.pressedKey == 38 && snake.speedY>0)
        {
          snake.speedY = -snake.speedY;
          snake.speedX = 0;
          console.log('up if going down');
        } else if (this.pressedKey == 38 && snake.speedX>0)
        {
          snake.speedY = -snake.speedX;
          snake.speedX = 0;
          console.log('up if going right');
        } else if (this.pressedKey == 38 && snake.speedX<0)
        {
          snake.speedY = snake.speedX;
          snake.speedX = 0;
          console.log('up if going left');
        }

        //down arrorw is pressed
        if (this.pressedKey == 40 && snake.speedX>0)
        {
          snake.speedY = snake.speedX;
          snake.speedX = 0;
          console.log('down if going right');
        } else if (this.pressedKey == 40 && snake.speedX<0)
        {
          snake.speedY = -snake.speedX;
          snake.speedX = 0;
          console.log('down if going left');
        }else if (this.pressedKey == 40 && snake.speedY<0)
        {
          snake.speedY = - snake.speedY;
          console.log('down if going up');
        }
        // pellet.x+=10;
        snake.newPosition();
        snake.update();
        console.log(snake.y);
      }
  }

  function stop (){
    clearInterval(this.interval);
  }

  function hasHitWall() {
    if((snake.x >= 296) || (snake.x <= 2)|| (snake.y <= 2)||(snake.y >= 296))
    return true;
  }

  start();


});
