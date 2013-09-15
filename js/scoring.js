// Global variables
var score = 0;
var scoreMultiplier = 1;
var scoreStreak = 0;

var life = 100;

var numCorrect = 0;
var numWrong = 0;
var percentage = 100;

// "Constants"
var SCORE_INCREMENT = 100;
var MULTIPLIER_INCREMENT = 5;
var MAX_MULTIPLIER = 50;

var MAX_LIFE = 100;
var LIFE_INCREMENT = 5;
var LIFE_DECREMENT = 10;

// Scoring functions

// correct answer? add to score, add to streak, add to multiplier, add life
function scoreCorrectAnswer() {
	if (!isGameOver()) {
		score += SCORE_INCREMENT * scoreMultiplier;
		$j(".points").html(score);
	
		updateLife(LIFE_INCREMENT);
	
		scoreStreak++;
		$j(".scoreStreak").html(scoreStreak);
	
		updateMultiplier();
	
		numCorrect++;
		updatePercentage();
	}
}

// incorrect answer? take away life, reset streak, reset multiplier		
function scoreWrongAnswer(damage) {
	updateLife(-LIFE_DECREMENT + damage);
	resetMultiplier();
	resetStreak();
	
	numWrong++;
	updatePercentage();
}

function updateLife(amount) {
	var newLife = life + amount;
	life = (newLife > MAX_LIFE) ? MAX_LIFE : newLife;
	$j("#lifebar-scale").css("width", life + "%")

	$j("#lifebar").css("background", "rgba("+(100-(life/2))+", 33, 54, 1.0)");
}

function isGameOver() {
	return life <= 0;
}

function updatePercentage() {
	percentage = Math.round((numCorrect / (numCorrect + numWrong)) * 100);
	$j(".percentage").html(percentage);
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
	resetPercentage();
	updateLife(Infinity);	
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

function resetPercentage() {
	numCorrect = 0;
	numWrong = 0;
	percentage = 0;
	$j(".percentage").html(percentage);
}

function debugScoring() {
	console.log("DEBUG SCORING: " + "Score: " + score + " | Life: " + life + " | Multiplier: " + scoreMultiplier + " | Streak: " + scoreStreak + " | Percentage: " + percentage);
}