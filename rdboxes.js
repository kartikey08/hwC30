class Boxes extends Baseclass{
  constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("redsqr.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
      image(this.image, this.body.position.x-15, this.body.position.y-15, this.width, this.height);
    }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 25;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x-15, this.body.position.y-15, this.width, this.height);
       pop();
     }
     
   }
};