// Global variables
var score = 0;
var scoreMultiplier = 1;
var scoreStreak = 0;

var life = 100;

// "Constants"
var SCORE_INCREMENT = 100;
var MULTIPLIER_INCREMENT = 5;
var MAX_MULTIPLIER = 5;

var MAX_LIFE = 100;
var LIFE_INCREMENT = 4;

// Scoring functions

// correct answer? add to score, add to streak, add to multiplier, add life
function scoreCorrectAnswer() {
	score += SCORE_INCREMENT * scoreMultiplier;
	$j(".points").html(score);
	updateLife(LIFE_INCREMENT);
	scoreStreak++;
	$j(".scoreStreak").html(scoreStreak);
	updateMultiplier();
}

// incorrect answer? take away life, reset streak, reset multiplier		
function scoreWrongAnswer() {
	updateLife(-LIFE_INCREMENT);
	resetMultiplier();
	resetStreak();
}

function updateLife(amount) {
	var newLife = life + amount;
	life = (newLife > MAX_LIFE) ? MAX_LIFE : newLife;
	$j("#lifebar-scale").css("width", life + "%")
}

function isGameOver() {
	return life <= 0;
}

function updateMultiplier(){
	if ( (scoreStreak > 0) && (scoreStreak % MULTIPLIER_INCREMENT === 0) && (scoreMultiplier < MAX_MULTIPLIER) ) {
		scoreMultiplier++;
		$j(".scoreMultiplier").html(scoreMultiplier);
	}
}

function resetScoring() {
	resetScore();
	resetMultiplier();
	resetStreak();
	updateLife(MAX_LIFE);	
}

function resetScore() {
	score = 0;
	$j(".points").html(score);
}

function resetMultiplier() {
	scoreMultiplier = 1;
	$j(".scoreMultiplier").html(scoreMultiplier);
}

function resetStreak() {
	scoreStreak = 0;
	$j(".scoreStreak").html(scoreStreak);
}

function debugScoring() {
	console.log("DEBUG SCORING: " + "Score: " + score + " | Life: " + life + " | Multiplier: " + scoreMultiplier + " | Streak: " + scoreStreak);
}