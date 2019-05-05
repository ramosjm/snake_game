const Component = function(width,height,colour,x,y,context){
  this.width = width;
  this.height = height;
  this.colour = colour;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.context = context;
};

Component.prototype.update = function () {
  const ctx = this.context;
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Component.prototype.newPosition = function(){
  this.x += this.speedX;
  this.y += this.speedY;
};

Component.prototype.turnLeft = function () {
  if (this.speedX >0)
  {
    this.speedX = -this.speedX;
    console.log('left if going right');
  }else if (this.speedY >0)
  {
    this.speedX = -this.speedY;
    this.speedY = 0;
    console.log('left if going down');
  }else if(this.speedY <0)
  {
    this.speedX = this.speedY;
    this.speedY = 0;
    console.log('left if going up');
  }
};

Component.prototype.turnRight = function(){
  if (this.speedX <0)
  {
    this.speedX = -this.speedX;
    console.log('right if going left');
  }else if (this.pressedKey == 39 && this.speedY <0)
  {
    this.speedX = -this.speedY;
    this.speedY = 0;
    console.log('right if going up');
  } else if (this.pressedKey == 39 && this.speedY >0)
  {
    this.speedX = this.speedY;
    this.speedY = 0;
    console.log('right if going down');
  }
};

module.exports = Component;
