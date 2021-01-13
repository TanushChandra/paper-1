class Ball{
    constructor(x,y,r,){
        var options ={
        isStatic:false,
        restitution:0.4,
        friction:0.5,
        density:1.2
       }
       this.r = r;
       this.body = Bodies.circle(x, y, this.r, options);
       this.color = color("red");
       World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        circle(pos.x, pos.y, this.r);

      }
    }
