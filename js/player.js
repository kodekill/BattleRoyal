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
            if(rightKey && this.x < canvas.width){
                this.rotate += (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }
            else if(leftKey && this.x > 0){
                this.rotate -= (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }


            else if(upKey && this.y > 0){
                this.y -= (this.speed / 1000) * elapsedTime;
                //console.log((this.speed / 100) * elapsedTime);
            }
            else if(downKey && this.y > 0){
                this.y += (this.speed / 1000) * elapsedTime;
                //console.log(this.speed);
            }
        }

        //this.x += (this.dx*this.speed);
        //this.y += (this.dy*this.speed);
    };
};


function getPicture(rotate){
    var Circumference = 2*Math.PI;

    if(rotate > (Circumference)){
        rotate = Math.abs(rotate % Circumference);
    }
    else if(rotate < Circumference){
        rotate = Math.abs(rotate % Circumference);
    }
    console.log(rotate);
    if(rotate == 0){
        image = BS_E;
    }

    else{
        if(rotate > ((11*Math.PI)/6) && rotate < Math.PI/6){
            image = BS_E;
        }

        else if(rotate > Math.PI/6 && rotate < Math.PI/3){
            image = BS_NE;
        }

        else if(rotate > Math.PI/3 && rotate < ((2*Math.PI)/3)){
            image = BS_N;
        }

        else if(rotate > ((2*Math.PI)/3) && rotate < ((5*Math.PI)/6)){
            image = BS_NW;
        }

        else if(rotate > ((5*Math.PI)/6) && rotate < ((7*Math.PI)/6)){
            image = BS_W;
        }

        else if(rotate > ((7*Math.PI)/6) && rotate < ((4*Math.PI)/3)){
            image = BS_SW;
        }

        else if(rotate > ((4*Math.PI)/3) && rotate < ((5*Math.PI)/3)){
            image = BS_S;
        }

        else if(rotate > ((5*Math.PI)/3) && rotate < ((11*Math.PI)/6)){
            image = BS_SE;
        }
    }
    
    //console.log(image);
    return image;
}