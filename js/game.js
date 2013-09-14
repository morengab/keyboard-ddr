$j = jQuery.noConflict();

$j(document).ready(function () {

	//create game objects

	
	//create keyboard mapping
	
	
	//set score
	setInterval(runGame, 1000);
});


function Game() {
	
	GAMESTATE = 0;
	
	

}

	
//assign icons
function Icon(keymap, label) {
	this.uniq = "uniqueid";
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
	this.speed = 6000;
	this.icon = 0;
}


Icon.prototype.setKeyMap = function () {
	var el = this;
	$j(document).bind("keypress", this.keymap, function (event) 	{
		console.log("PRESSED KEY " + el.keymap + el.label);
		$j("#" + el.uniq).addClass("press");
	});	
}

Icon.prototype.setPosition = function(x, y) {
	
	this.positionX = x;
	this.positionY = y;
	
	console.log(this.positionX);
	
}

Icon.prototype.removeKeyMap = function () {
	var el = this;
	$j(document).unbind("keypress", this.keymap);
}

Icon.prototype.draw = function () {
	
	var icon_item = $j("<div/>", {
		id: this.uniq,
		class: "icon"
	});
	
	icon_item.html(this.label);
	
	icon_item.css("left", this.positionX + "px");
	icon_item.css("top", this.positionY + "px");
	this.icon = icon_item;
	$j("#board").append(icon_item);
}

Icon.prototype.animate = function () {
	
	$j(this.icon).animate({
		"top" : "-500"	
		}, this.speed, function () {
		
		$j(this.icon).remove();
		
	});
	
}

//play audio

function runGame()
{
	var leftpos = [0, 120, 240, 360];
	var setRandom = Math.ceil(Math.random()*4);
	var icon = new Icon("Ctrl+S", "Save");
	icon.setKeyMap();
	icon.setPosition(leftpos[setRandom], 800);
	icon.draw();
	icon.animate();
}
