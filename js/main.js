var myBoat;
let lastTimeStamp = performance.now();

window.onload = function() {
    myBoat = new makeBoat();
    requestAnimationFrame(gameLoop);
}


function loadGame(){
    setSail.play();
}

function endGame(){
    sinkShip.play();
}



function gameLoop(currentTime){
    let elapsedTime = currentTime - lastTimeStamp;
    lastTimeStamp = currentTime;

    myBoat.moveBoat(elapsedTime);
	//update();
	render();
	requestAnimationFrame(gameLoop);
}



function render(){
	var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears the canvas each frame so objects don't blur
    
    myBoat.drawBoat();
    myBoat.moveBoat(); 

}