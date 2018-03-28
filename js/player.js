var slow = 200;
var medium = 275;
var fast = 350;
var ultra = 400;
var centerX;
var centerY;


function makeBoat(){
	this.x = 525;
	this.y = 525;
	this.dx = 0;
    this.dy = 0;
    this.rotate = 0; 
    this.speed = medium;
    this.status = 1;
    
    this.drawBoat = function(){
		var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(this.status == 1){
            //console.log(this.rotate);

            image = getPicture(this.rotate);
            //console.log(image);
            //centerX = this.x-(this.image.width/2);
            //centerY = this.y-(this.image.height/2);
            
            ctx.save();
                ctx.translate(this.x, this.y);
                //ctx.rotate(this.rotate);
                ctx.translate(-this.x, -this.y);
                ctx.drawImage(image, (this.x - image.width/2), (this.y - image.height/2), image.width, image.height);
            ctx.restore();
        }
    };

    this.moveBoat = function(elapsedTime){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(elapsedTime > 1){
            //console.log(elapsedTime);
            //Controls for boat movement
            if(rightKey){
                this.rotate += (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }
            else if(leftKey){
                this.rotate -= (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }


            else if(upKey && this.y > 0){
                this.x += dx * (this.speed / 1000) * elapsedTime;
                this.y -= dy * (this.speed / 1000) * elapsedTime;
                //console.log(this.x);
            }
            else if(downKey && this.y > 0){
                this.x -= dx * (this.speed / 1000) * elapsedTime;
                this.y += dy * (this.speed / 1000) * elapsedTime;
                //console.log(this.speed);
            }
        }

        //this.x += (this.dx*this.speed);
        //this.y += (this.dy*this.speed);
    };
};


function getPicture(rotate){
    var Circumference = 2*Math.PI;


    var hi = rotate * 180 / Math.PI;

    //console.log(hi);

    if(rotate > (Circumference)){
        rotate = Math.abs(rotate % Circumference);
    }
    else if(rotate < Circumference){
        rotate = Math.abs(rotate % Circumference);
    }
    //console.log(rotate);
    if(rotate == 0){
        image = BS_E;
    }

    else{
        if(rotate > ((11*Math.PI)/6) && rotate < Math.PI/6){
            image = BS_E;
            this.dy = 0;
            this.dx = 1; 
        }

        else if(rotate > Math.PI/6 && rotate < Math.PI/3){
            image = BS_NE;
            this.dy = 1;
            this.dx = 1;
        }

        else if(rotate > Math.PI/3 && rotate < ((2*Math.PI)/3)){
            image = BS_N;
            this.dy = 1;
            this.dx = 0;
        }

        else if(rotate > ((2*Math.PI)/3) && rotate < ((5*Math.PI)/6)){
            image = BS_NW;
            this.dy = 1;
            this.dx = -1;
        }

        else if(rotate > ((5*Math.PI)/6) && rotate < ((7*Math.PI)/6)){
            image = BS_W;
            this.dy = 0;
            this.dx = -1;
        }

        else if(rotate > ((7*Math.PI)/6) && rotate < ((4*Math.PI)/3)){
            image = BS_SW;
            this.dy = -1;
            this.dx = -1;
        }

        else if(rotate > ((4*Math.PI)/3) && rotate < ((5*Math.PI)/3)){
            image = BS_S;
            this.dy = -1;
            this.dx = 0;
        }

        else if(rotate > ((5*Math.PI)/3) && rotate < ((11*Math.PI)/6)){
            image = BS_SE;
            this.dy = -1;
            this.dx = 1;
        }
    }
    
    //console.log(image);
    return image;
}