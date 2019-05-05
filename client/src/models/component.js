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
  }else if (this.speedY <0)
  {
    this.speedX = -this.speedY;
    this.speedY = 0;
    console.log('right if going up');
  } else if (this.speedY >0)
  {
    this.speedX = this.speedY;
    this.speedY = 0;
    console.log('right if going down');
  }
};

Component.prototype.goUp = function(){
  if (this.speedY>0)
    {
      this.speedY = -this.speedY;
      this.speedX = 0;
      console.log('up if going down');
    } else if (this.speedX>0)
    {
      this.speedY = -this.speedX;
      this.speedX = 0;
      console.log('up if going right');
    } else if (this.speedX<0)
    {
      this.speedY = this.speedX;
      this.speedX = 0;
      console.log('up if going left');
  }
};

Component.prototype.goDown = function(){
  if (this.speedX>0)
  {
    this.speedY = this.speedX;
    this.speedX = 0;
    console.log('down if going right');
  } else if (this.speedX<0)
  {
    this.speedY = -this.speedX;
    this.speedX = 0;
    console.log('down if going left');
  }else if (this.speedY<0)
  {
    this.speedY = -this.speedY;
    console.log('down if going up');
  }

};

module.exports = Component;
