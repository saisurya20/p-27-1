class Box{
constructor(x,y,r){

    var options={

        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
    }
this.x=x
this.y=y
this.r=r
this.body.circle(this.x,this.y,(this.r)/2,options)
World.add(world,this.body)
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rectMode(CENTER)
fill("red")
ellipse(0,0,this.r,this.r)
pop()

}

}