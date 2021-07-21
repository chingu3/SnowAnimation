class Snow{
    constructor(x,y,width,height){
        var options = {
            
           'Airfriction':3,
            'density':2

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.animation = loadAnimation("snow4.webp");
        World.add(world, this.body);
    
    }
    display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, 30, 50, this.width, this.height);
        pop();
      }
}

