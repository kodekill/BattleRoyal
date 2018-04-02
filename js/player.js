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
	this.direction = 3;
    
    this.drawBoat = function(){
		var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
		
		//console.log(elapsedTime);
        if(this.status == 1){
            //console.log(this.rotate);
			this.direction = getDirection(this.rotate);
            image = getImage(this.direction);
			
            ctx.drawImage(image, (this.x - image.width/2), (this.y - image.height/2), image.width, image.height);
        }
		if(this.status == 0){
			//this.direction = getDirection(this.rotate);
            image = getSink1Image(this.direction);
			
            ctx.drawImage(image, (this.x - image.width/2), (this.y - image.height/2), image.width, image.height);
			//Pass elapsed time in here, if it adds up to a certain number then call status = -1
        	this.status = -1;
		}
		if(this.status == -1){
			image = getSink2Image(this.direction);
			 ctx.drawImage(image, (this.x - image.width/2), (this.y - image.height/2), image.width, image.height);
		}
		
		console.log(this.status);
    };

    this.moveBoat = function(elapsedTime){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
		//console.log(elapsedTime);
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


// Calculates what the direction of the boat is and sets where the boat can move.
function getDirection(rotate){
    var Circumference = 2*Math.PI;

    if(rotate > 0){
        rotate = Math.abs(rotate % Circumference);
    }
    else if(rotate < Circumference){
        rotate = Circumference - (Math.abs(rotate % Circumference));
    }
    //console.log(rotate);
 
        if(rotate > ((23*Math.PI)/12) || rotate < Math.PI/12){
			this.direction = 3;
            this.dy = 0;
            this.dx = 1; 
        }

        else if(rotate > Math.PI/12 && rotate < Math.PI/3){
			this.direction = 2;
            this.dy = 1;
            this.dx = 1;
        }

        else if(rotate > Math.PI/3 && rotate < ((2*Math.PI)/3)){
			this.direction = 1;
            this.dy = 1;
            this.dx = 0;
        }

        else if(rotate > ((2*Math.PI)/3) && rotate < ((11*Math.PI)/12)){
			this.direction = 8;
            this.dy = 1;
            this.dx = -1;
        }

        else if(rotate > ((11*Math.PI)/12) && rotate < ((13*Math.PI)/12)){
			this.direction = 7;
            this.dy = 0;
            this.dx = -1;
        }

        else if(rotate > ((13*Math.PI)/12) && rotate < ((4*Math.PI)/3)){
			this.direction = 6;
            this.dy = -1;
            this.dx = -1;
        }

        else if(rotate > ((4*Math.PI)/3) && rotate < ((5*Math.PI)/3)){
			this.direction = 5;
            this.dy = -1;
            this.dx = 0;
        }

        else if(rotate > ((5*Math.PI)/3) && rotate < ((23*Math.PI)/12)){
			this.direction = 4;
            this.dy = -1;
            this.dx = 1;
        }
    
    return this.direction;
}


//Takes the direction and returns the appropriate image.
function getImage(direction){
	
	switch(direction){
		case 1:
			image = BS_N;
			break;
			
		case 2:
			image = BS_NE;
			break;
			
		case 3:
			image = BS_E;
			break;
			
		case 4:
			image = BS_SE;
			break;
			
		case 5:
			image = BS_S;
			break;
			
		case 6:
			image = BS_SW;
			break;
			
		case 7:
			image = BS_W;
			break;
			
		case 8:
			image = BS_NW;
			break;
			
		default:
			image = BS_E;
	}
	return image;
}


function getSink1Image(direction){
	
	switch(direction){
		case 1:
			image = S_BS_N1;
			break;
			
		case 2:
			image = S_BS_NE1;
			break;
			
		case 3:
			image = S_BS_E1;
			break;
			
		case 4:
			image = S_BS_SE1;
			break;
			
		case 5:
			image = S_BS_S1;
			break;
			
		case 6:
			image = S_BS_SW1;
			break;
			
		case 7:
			image = S_BS_W1;
			break;
			
		case 8:
			image = S_BS_NW1;
			break;
			
		default:
			image = S_BS_E1;
	}
	return image;
}


function getSink2Image(direction){
	
	switch(direction){
		case 1:
			image = S_BS_N2;
			break;
			
		case 2:
			image = S_BS_NE2;
			break;
			
		case 3:
			image = S_BS_E2;
			break;
			
		case 4:
			image = S_BS_SE2;
			break;
			
		case 5:
			image = S_BS_S2;
			break;
			
		case 6:
			image = S_BS_SW2;
			break;
			
		case 7:
			image = S_BS_W2;
			break;
			
		case 8:
			image = S_BS_NW2;
			break;
			
		default:
			image = S_BS_E2;
	}
	return image;
}


