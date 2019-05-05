const Snake = function(){
  this.components = [];
};


Snake.prototype.update = function(){
  this.components.forEach((component)=>{
    component.update();
  });
};

Snake.prototype.setSpeed = function(){
  this.components.forEach((component)=>{
    component.speedX =1;
  });
};

Snake.prototype.eat = function(component){
  this.components.push(component);
};

Snake.prototype.changePosition = function(){
  this.components.forEach((component)=>{
    component.newPosition();
  });
};

Snake.prototype.turnLeft = function () {
  this.components.forEach((component)=>{
    component.turnLeft();
  });
};

Snake.prototype.turnRight = function(){
  this.components.forEach((component)=>{
    component.turnRight();
  });
};

Snake.prototype.goUp = function(){
  this.components.forEach((component)=>{
    component.goUp();
  });
}


module.exports = Snake;
