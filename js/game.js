$j = jQuery.noConflict();
jQuery.fx.interval = 5;
var speed = 5000;
var height = 800;
var width = 200;
var beat = 1000;
$j(document).ready(function () {

	//create game objects

	
	//create keyboard mapping
	$j("#start").on("click", function () {
	//music
	$j("#music").jPlayer({
		ready: function () {
			$j(this).jPlayer("setMedia", {
				mp3: "media/spacejam.mp3"
			}).jPlayer("play");
		},
		swfPath: "js",
		loop: true,
		supplied: "mp3",
	});
	
	
	
	//set s3core
	var game = new Game();
	game.runGame();
	
	});
	
	
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
				if (parseInt(pos.top) <= 10 && self.state == 0)
				{
					//missed!
					self.state = 2;
				}
			
			}	
			
		});		
		 
		
}




Game.prototype.runGame = function () {
		var self = this;
		setInterval(function () {self.setLoop()}, beat * 4);
}

Game.prototype.setLoop = function (i) {
	//create the beat tuples widths
	var tuple1 = [0, width, width*2, width*3];
	var tuple2 = [0, 0, width, width];
	var tuple3 = [width, width*2, 0, width*3];
	var tuple4 = [width*3, width*3, width, width];
	var tuple5 = [width*2, width*3, width*1, 0];
	var random_tuple = [tuple1, tuple2, tuple3, tuple4, tuple5];
	var setRandom = Math.ceil(Math.random()*4);
	for (var i = 0; i <= 3; i++)
	{
	this.runLoop(random_tuple[setRandom], i);
	}		
}

Game.prototype.runLoop = function (set_tuple, runCount) {
	var self = this;
	setTimeout(function () {
		var icon = new Icon("Ctrl+S", "Save");
			icon.setKeyMap();
			icon.draw(set_tuple[runCount], height);
			self.animate(icon);

	
	}, runCount * beat);
	
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

