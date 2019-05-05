const Snake = function(width,height,colour,x,y,context){
  this.width = width;
  this.height = height;
  this.colour = colour;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.context = context;
};

Snake.prototype.update = function () {
  const ctx = this.context;
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Snake.prototype.newPosition = function(){
  this.x += this.speedX;
  this.y += this.speedY;
};

module.exports = Snake;
