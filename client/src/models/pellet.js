const Pellet = function(width,height,colour,x,y,context){
  this.width = width;
  this.height = height;
  this.colour = colour;
  this.x = x;
  this.y = y;
  this.context = context;
};

Pellet.prototype.update = function () {
  const ctx = this.context;
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.width, this.height);

};

module.exports = Pellet;
