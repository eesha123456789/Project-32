class Box
{
    constructor(x,y,width,height,color)
    {
        var box_options={
            restitution:0.3,
            friction:1,
            density: 0.001
           
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        this.color=color
        this.Visiblity=255
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        push();
        if(this.body.speed>2.77){
            World.remove(world,this.body)
            tint(255,this.Visiblity)
            this.Visiblity=this.Visiblity-5;
          //  scores++            
        }
        else{
            rectMode(CENTER)
            strokeWeight(3);
            fill(this.color)
            rect(pos.x,pos.y,this.width,this.height)
        }
        pop();
    
    }
    score(){
        if(this.Visiblity<0&&this.Visiblity>-105){
          scores++
        }
    }
}


