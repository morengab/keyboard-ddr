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

// updates scoring based on whether key press was correct. returns whether to continue the game based on player's life.
function scoreAnswer(isAnswerCorrect) {
	if (isAnswerCorrect) {
		scoreCorrectAnswer();
	} else {
		scoreWrongAnswer();
	}
	
	return life > 0;
}

// correct answer? add to score, add to streak, add to multiplier, add life
function scoreCorrectAnswer() {
	score += SCORE_INCREMENT * scoreMultiplier;
	updateLife(LIFE_INCREMENT);
	scoreStreak++;
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
}

function updateMultiplier(){
	if ( (scoreStreak > 0) && (scoreStreak % MULTIPLIER_INCREMENT === 0) && (scoreMultiplier < MAX_MULTIPLIER) ) {
		scoreMultiplier++;
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
}

function resetMultiplier() {
	scoreMultiplier = 1;
}

function resetStreak() {
	scoreStreak = 0;
}

function debugScoring() {
	console.log("DEBUG SCORING:");
	console.log("Score: " + score);
	console.log("Life: " + life);
	console.log("Multiplier: " + scoreMultiplier);
	console.log("Streak: " + scoreStreak);
}