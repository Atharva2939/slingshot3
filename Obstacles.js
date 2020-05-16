class Obstacles{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':5
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("gift.jpg");
    this.Visiblity = 255;
       // this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.height = height;
        World.add(world,this.body)
    }
    display(){
    if(this.body.speed<5)
    { 
    image(this.image,this.body.position.x,this.body.position.y,30,30);
    }
    else{
        World.remove(world, this.body)
         push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,30,30);
      pop();
    }  
    }
    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
    // score(){
    //     if (this.Visiblity < 0 && this.Visiblity > -1005){
    //         score++;
    //       }
    //     }
    // }
}


