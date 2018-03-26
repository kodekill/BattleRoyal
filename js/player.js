var slow = 2.0;
var medium = 2.75;
var fast = 3.5;
var ultra = 4;


function makeBoat(){
	this.x = 525;
	this.y = 525;
	this.dx = 0;
    this.dy = 0;
    this.rotate = 0; 
    this.speed = slow;
    this.status = 1;
    
    this.drawBoat = function(){
		var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(this.status == 1){
            //console.log(this.rotate);
            
            ctx.save();
                ctx.translate(this.x+20, this.y+20); 
                ctx.rotate(this.rotate);
                ctx.translate(-this.x-10, -this.y-10); 
                ctx.drawImage(BS_N, this.x, this.y);

            ctx.restore();
        }
    };

    this.moveBoat = function(elapsedTime){
        
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //console.log(elapsedTime);


        if(elapsedTime > 1){
            //Controls for boat movement
            if(rightKey && this.x < canvas.width){
                this.rotate += (this.speed / 1000) * elapsedTime;
                console.log(this.rotate);
            }
            else if(leftKey && this.x > 0){
                this.rotate -= (this.speed / 1000) * elapsedTime;
                console.log(this.rotate);
            }


            else if(upKey && this.y > 0){
                this.y -= this.speed;
                //console.log(this.speed);
            }
            else if(downKey && this.y > 0){
                this.y += this.speed;
                //console.log(this.speed);
            }
        }

        //this.x += (this.dx*this.speed);
        //this.y += (this.dy*this.speed);
    };
};