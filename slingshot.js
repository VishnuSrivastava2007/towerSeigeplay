class SlingShot{ 
    constructor(bodyA,pointB){ 

        var options = { 
        bodyA:bodyA, 
        pointB:pointB,
        stiffnes:0.04, 
        length:20 
    }

        this.pointB = pointB 
        this.sling = Constraint.create(options); 
        World.add(world,this.sling); 
        
    }

      fly() {
           this.sling.bodyA = null;

     }
     
        display(){ 
            if(this.sling.bodyA){ 
                var pointA = this.pointB 
                var pointB = this.sling.bodyA.position;
                strokeWeight(4); fill("orange"); line(pointA.x, pointA.y, pointB.x, pointB.y);
       }

     
    }

}
