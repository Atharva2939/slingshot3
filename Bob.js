class Bob {
  constructor(x,y) {
    // var options ={ 
    //   'restitution':1
    //       }
    this.body=Bodies.circle(x,y,50);
    this.radius=50;
    World.add(world,this.body)
  }
  display() {
    var pos =this.body.position;
   // rectMode(CENTER);
    fill("brown");
    //ellipseMode(RADIUS);
    ellipse(pos.x, pos.y,50,50);
  }
}
