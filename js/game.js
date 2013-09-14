$j = jQuery.noConflict();

var speed = 6000;

$j(document).ready(function () {

	//create game objects

	
	//create keyboard mapping
	
	
	//set score
	var game = new Game();
	game.runGame();
});


function Game() {
	//parameters
	//icons being used
	//
}


Game.prototype.animate = function(current) {
	var self = current;
	$j(current.icon).animate({
		"top" : "-100"	
		}, {
			easing: "linear",
			duration: speed,
			complete: function () {
				 $j(this).remove();
				 current.removeKeyMap();
			},
			step: function(now, fx) {
				var pos = $j(fx.elem).position();
				if (parseInt(pos.top) <= 80 && self.state == 0)
				{
					$j(this).addClass("active");
					self.setActive();
				}
				if (parseInt(pos.top) <= 0 && self.state == 0)
				{
					//missed!
				}
			
			}	
			
		});		
		 
		
}




Game.prototype.runGame = function () {
		var self = this;
		setInterval(function () {self.setLoop()}, 2000);
}

Game.prototype.setLoop = function () {
	
		var leftpos = [0, 120, 240, 360];
		var setRandom = Math.ceil(Math.random()*4);
		var icon = new Icon("Ctrl+S", "Save");
		icon.setKeyMap();
		icon.draw(leftpos[setRandom], 800);
		this.animate(icon);
	
}
	
//assign icons
function Icon(keymap, label) {
	this.uniq = new Date().getUTCMilliseconds();
	//Ctrl+S
	this.keymap = keymap;
	
	//active, inactive
	this.state = 0;
	
	//position (x,y)
	this.positionX = 0;
	this.positionY = 0;
	
	//label
	this.label = label;
	
	this.value = 10;
	this.value_neg = -5;
	this.icon = 0;
}



Icon.prototype.setKeyMap = function () {
	var el = this;
	$j(document).bind("keypress", el.keymap, function () {
		if (el.state == 1)
		{
			console.log("PRESSED");
			$j("#" + el.uniq).addClass("press");
			el.state = 0;
			scoreCorrectAnswer();
			debugScoring();
		}
	});	

}


Icon.prototype.removeKeyMap = function () {
	this.state = 0;
}

Icon.prototype.draw = function (x, y) {
	
	var icon_item = $j("<div/>", {
		id: this.uniq,
		class: "icon"
	});
	
	icon_item.html(this.label);
	
	icon_item.css("left", x + "px");
	icon_item.css("top", y + "px");
	this.icon = icon_item;
	$j("#board").append(icon_item);
}

Icon.prototype.setActive = function () {
	
	this.state = 1;
	
}

//play audio

