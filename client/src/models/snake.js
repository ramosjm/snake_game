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
    console.log(component);
  });
};


module.exports = Snake;
