const Snake = function(piece1,piece2,piece3){
  this.components = [piece1,piece2,piece3];
};


Snake.prototype.update = function(){
  this.components.forEach((component)=>{
    console.log(component);
  });
};

Snake.prototype.eat = function(component){
  this.components.push(component);
};

module.exports = Snake;
