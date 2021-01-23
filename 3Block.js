class Block3{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
        this.Visibility = 255;
    }
    display(){
        if(this.body.speed<4){
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            fill("#FFBEC4");
        } else {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility-5;
            tint(255, this.Visibility);
            pop();
        }
    }
}
/*
class Block3{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        push();
        var post = this.body.position;
        rectMode(CENTER);
        fill("#FFBEC4");
        rect(post.x,post.y,this.width,this.height);
        pop();
    }
}

*/