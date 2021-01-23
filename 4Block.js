
class Block4{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
        this.Visibility = 225;
    }
    display(){
        if(this.body.speed<7){
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            fill("#67D1EA");
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
class Block4{
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
        var post = this.body.position;
        rectMode(CENTER);
        fill("#67D1EA");
        rect(post.x,post.y,this.width,this.height);
    }
}*/