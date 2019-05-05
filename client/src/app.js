const Component = require("./models/component.js");
const Snake = require("./models/snake.js");
const Wall = require("./models/wall.js");

document.addEventListener('DOMContentLoaded',()=>{
  console.log('Hiya');

  const start = function() {
    gameCanvas = document.querySelector("#game-container");
    context = gameCanvas.getContext("2d");
    pellet = new Component(15,15,"blue",40,40,context);
    snake = generateSnake();
    snake.setSpeed();
    console.log(snake);

    leftWall = new Wall(2,300,"red",0,0,context);
    rightWall = new Wall(2,300,"red",298,0,context);
    topWall = new Wall(300,2,"red",0,298,context);
    bottomWall = new Wall(300,2,"red",0,0,context);

    this.interval = setInterval(updateGameArea, 100);

    window.addEventListener('keydown', function (evt) {
      this.pressedKey = evt.keyCode;
    });
    window.addEventListener('keyup', function (evt) {
      this.pressedKey = false;
    });
  }

  function generateSnake(){
    let snake = new Snake();
    let width = 20;
    let xPosition = 70;
    for (let i = 0; i < 3; i++) {
      const component = new Component (width,20,"green",xPosition,50,context);
      snake.eat(component);
      xPosition -= width;
    }
    return snake;
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
          snake.speedX = -snake.speedX;
          console.log('left if going right');
        }else if (this.pressedKey == 37 && snake.speedY >0)
        {
          snake.speedX = -snake.speedY;
          snake.speedY = 0;
          console.log('left if going down');
        } else if(this.pressedKey == 37 && snake.speedY <0)
        {
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
      snake.changePosition();
      snake.update();
    }
  }

  function stop (){
    clearInterval(this.interval);
  }

  function hasHitWall() {
    if((snake.x >= 278) || (snake.x <= 2)|| (snake.y <= 2)||(snake.y >= 278))
    return true;
  }

  function eatPellet(pellet){
    if(snake.x == pellet.x && snake.y == pellet.y){
      snake.eat(pellet);
    }
  }

  start();


});
