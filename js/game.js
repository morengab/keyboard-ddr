$j = jQuery.noConflict();
jQuery.fx.interval = 5;
var speed = 4000;
var height = 800;
var width = 180;
var beat = 1000;
var started = false;
var gameloop;
var tupleloop = [];
var game;
var selectedIcons;
var userSelected = [1,2,3,5];

$j(document).ready(function () {
	
	//show modal on page load
	$j.modal($j("#my-modal"));

	//create game objects
	//selectedIcons = $j.get("getShortcuts.php", { app_name: "Photoshop" }, {} ,  );
	
	$j.ajax({
		url: "getShortcuts.php",
		data: {app_name: "Photoshop"},
		success: function (response) {
			selectedIcons = response;
		},
		dataType: "json"
	});
	
	
	$j("#music").jPlayer({
		ready: function () {
			$j(this).jPlayer("setMedia", {
				mp3: "media/eple.mp3"
			});
			},
		swfPath: "js",
		loop: true,
		supplied: "mp3",
	});

	//clicking start will close the modal
	// and start the game
	$j("#start").click(function () {
		$j.modal.close();
	});

	//create keyboard mapping
	$j("#new-game").click(function () {
		if (started == false)
	{
		resetScoring();
			$j("#music").jPlayer("play", 0);
			game = new Game();
			game.runGame();
			started = true;
	//music
	}
	else {
			game.endGame();
			$j(".icon").remove();
			resetScoring();
			$j("#music").jPlayer("stop");
			started = false;
		}
	});
	
	//create modal handler
	$j("#reset").click(function () {
		//$("#my-modal").modal(); 
		
		
			game.endGame();
			$j(".icon").remove();
			resetScoring();
			
			game = new Game();
			game.runGame();
			$j("#music").jPlayer("play", 0);
			started = true;

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
		"top" : "-200"	
		}, {
			easing: "linear",
			duration: speed,
			complete: function () {
				 $j(this).remove();
				 current.removeKeyMap();
			},
			step: function(now, fx) {
				var pos = $j(fx.elem).position();
				if (parseInt(pos.top) <= 50 && parseInt(pos.top) >= -50 && self.state == 0)
				{
					$j(this).addClass("active");
					self.setActive();
				}
				else if (parseInt(pos.top) <= -50 && self.state != 2)
				{
					// missed!
					scoreWrongAnswer();
					self.state = 2;
					debugScoring();
				}
			
			}	
			
		});		
		 
		
}


Game.prototype.endGame = function () {
	
	clearInterval(gameloop);
	for (var i = 0; i < tupleloop.length; i++)
	{
		clearTimeout(tupleloop[i]);
	}
	
}


Game.prototype.runGame = function () {
		var self = this;
		gameloop = setInterval(function () {self.setLoop()}, beat * 4);
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
	tupleloop[runCount] = setTimeout(function () {
		var swimlane = set_tuple[runCount] / width;
		var currIcon = selectedIcons[userSelected[swimlane]];
		var icon = new Icon(currIcon.shortcut, currIcon.name, currIcon.image);
		icon.setKeyMap();
		icon.draw(set_tuple[runCount], height);
		self.animate(icon);
	}, runCount * beat);
}
	
//assign icons
function Icon(keymap, label, image) {
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
	this.image = image;
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
			el.state = 2;
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
	
	icon_item.html("<span>(" + this.label + ") " + this.keymap + "</span>");
	
	icon_item.css("left", parseInt(x + 30) + "px");
	icon_item.css("top", y + "px");
	icon_item.css("background", "url('" + this.image + "') top left no-repeat transparent");
	icon_item.css("background-size", "cover");
	this.icon = icon_item;
	$j("#board").append(icon_item);
}

Icon.prototype.setActive = function () {
	
	this.state = 1;
	
}

//play audio

