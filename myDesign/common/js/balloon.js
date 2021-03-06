var balloon = function(pId,sID){	
	this.oWrapper = document.getElementById(pId);
	this.oBalloon = {
		obj: document.getElementById(sID),
		w: this.oWrapper.clientWidth,
		x: Math.random() * this.oWrapper.clientWidth,
		y: Math.random() * 100,
		strength: {
			x: 0.02 + Math.random()/10,
			y: 0.5 + Math.random()/2
		},
		amplifier: Math.random()*20,
		angle: 0
	}
	this.setTimer();
};

balloon.prototype.setTimer = function(){
	this.move();
	var oSelf = this;
	setTimeout(function(){ oSelf.setTimer() }, 30);
};

balloon.prototype.move = function(){
	var oBalloon = this.oBalloon;
	oBalloon.y += oBalloon.strength.y;
	if(oBalloon.y - 20 > this.oWrapper.clientHeight ){
		oBalloon.y = 0;
		oBalloon.obj.style.top = 0;
		oBalloon.x = Math.random() * oBalloon.w;
	}
	oBalloon.angle += oBalloon.strength.x;
	oBalloon.obj.style.top = oBalloon.y + "px";
	oBalloon.obj.style.left = oBalloon.x + oBalloon.amplifier * Math.sin(oBalloon.angle)+"px";
};