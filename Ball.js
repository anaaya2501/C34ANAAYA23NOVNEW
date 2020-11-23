class Ball {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        //'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("blue");
    fill("pink");
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}