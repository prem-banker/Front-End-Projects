var canvas = document.getElementById('my-canvas');
var raf;
var frameid = 0;
var misses = 0;
var hits = 0;
var totaltargets = 1;
var targets = [];
var newtargets = true;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;


function resizeCanvas() {
    var canvas = document.getElementById("my-canvas");
    canvas.width = window.innerWidth*0.95;
    canvas.height = 500;
}

function showCoords(event){
	//gives absolute co-ords ( to the start of doc)
	var x = event.clientX;
  	var y = event.clientY;
  	return [x,y]
}

function checkHit(event, targets){
	var canvas = document.getElementById("my-canvas");
	mousex = showCoords(event)[0];
	mousey = showCoords(event)[1];
	canvasx = canvas.offsetLeft;
	canvasy = canvas.offsetTop;
	realx = mousex - canvasx;
	realy = mousey - canvasy;
	targets.forEach(function(t){
		diffx = Math.abs(t.X - realx);
		diffy = Math.abs(t.Y - realy);
		if ( diffx <= t.R && diffy <= t.R){
			console.log('hit');
			hits+=1
			deleteindex = targets.indexOf(t);
			targets.splice(deleteindex, 1);
			return true;
		}
	});
}





function drawCircle() {
	this.ctx = canvas.getContext('2d'); 
	this.X = 15 + Math.floor((canvas.width-30)*Math.random());
	this.Y = 15 + Math.floor((canvas.height-65)*Math.random());
	this.R = 30;
	this.count = 0.2;
	this.resize = function(){
		this.R = this.R - this.count;
	}
	this.draw = function(){
		if ( this.R > 0.3){
			this.ctx.beginPath();
			this.ctx.arc(this.X, this.Y, this.R, 0, 2 * Math.PI, false);
			this.ctx.fillStyle = '#0080ff';
			this.ctx.fill();
			this.ctx.lineWidth = 3;
			this.ctx.strokeStyle = '#0080ff';
			this.ctx.stroke();
		}
	}		
}

targets.push(new drawCircle());

function drawf(){
	frameid+=1;
	ctx = canvas.getContext('2d'); 
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.font = "30px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "right";
	ctx.fillText(" Total Targets : " + String(totaltargets), 300, canvas.height - 10);
	ctx.fillText(" Hits : " + String(hits), 450, canvas.height - 10);
	ctx.fillText(" Misses : " + String(misses), 630, canvas.height - 10);
	ctx.moveTo(10, canvas.height - 50);
	ctx.lineTo(canvas.width - 10, canvas.height - 50);
	ctx.stroke();
	targets.forEach(function(t){
		if ( t.R > 0){
			t.draw();
			t.resize();
		}
		else {
			deleteindex = targets.indexOf(t);
			targets.splice(deleteindex, 1);
			misses+=1
		}
	});
	if (frameid > 30 && newtargets == true){
		targets.push(new drawCircle());
		totaltargets+=1;
		frameid = 0;
	}

	
	if (totaltargets >= 30){
		newtargets = false;
		console.log('stop');
		//window.cancelAnimationFrame(raf);
	}
	raf = window.requestAnimationFrame(drawf);
}
