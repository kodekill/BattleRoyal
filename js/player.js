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
    this.image = BS_E;
    
    this.drawBoat = function(){
		var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(this.status == 1){
            //console.log(this.rotate);
            this.image = getDirection(this.rotate);
            ctx.drawImage(this.image, (this.x - image.width/2), (this.y - image.height/2), image.width, image.height);
        }
    };

    this.moveBoat = function(elapsedTime){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(elapsedTime > 1){
            //Controls for boat movement
            if(rightKey){
                this.rotate -= (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }
            else if(leftKey){
                this.rotate += (this.speed / 75000) * elapsedTime;
                //console.log(this.rotate);
            }


            else if(upKey && this.y > 0){
                this.x += dx * (this.speed / 1000) * elapsedTime;
                this.y -= dy * (this.speed / 1000) * elapsedTime;
                //console.log(this.x);
            }
            else if(downKey && this.y > 0){
                this.x -= dx * (this.speed / 2000) * elapsedTime;
                this.y += dy * (this.speed / 2000) * elapsedTime;
                //console.log(this.speed);
            }
        }
    };
};


function getDirection(rotate){
    var Circumference = 2*Math.PI;

    if(rotate > 0){
        rotate = Math.abs(rotate % Circumference);
    }
    else if(rotate < Circumference){
        rotate = Circumference - (Math.abs(rotate % Circumference));
    }
    console.log(rotate);

 
        if(rotate > ((23*Math.PI)/12) || rotate < Math.PI/12){
            image = BS_E;
            this.dy = 0;
            this.dx = 1; 
        }

        else if(rotate > Math.PI/12 && rotate < Math.PI/3){
            image = BS_NE;
            this.dy = 1;
            this.dx = 1;
        }

        else if(rotate > Math.PI/3 && rotate < ((2*Math.PI)/3)){
            image = BS_N;
            this.dy = 1;
            this.dx = 0;
        }

        else if(rotate > ((2*Math.PI)/3) && rotate < ((11*Math.PI)/12)){
            image = BS_NW;
            this.dy = 1;
            this.dx = -1;
        }

        else if(rotate > ((11*Math.PI)/12) && rotate < ((13*Math.PI)/12)){
            image = BS_W;
            this.dy = 0;
            this.dx = -1;
        }

        else if(rotate > ((13*Math.PI)/12) && rotate < ((4*Math.PI)/3)){
            image = BS_SW;
            this.dy = -1;
            this.dx = -1;
        }

        else if(rotate > ((4*Math.PI)/3) && rotate < ((5*Math.PI)/3)){
            image = BS_S;
            this.dy = -1;
            this.dx = 0;
        }

        else if(rotate > ((5*Math.PI)/3) && rotate < ((23*Math.PI)/12)){
            image = BS_SE;
            this.dy = -1;
            this.dx = 1;
        }
    
    return image;
}