$(document).ready(function() {

	
	
	var amethystValue, lapislazuliValue, moldaviteValue, rosequartzValue;
	var wins = 0;
	var losses = 0;
	var randomComputerNumber;
	var userTallyScore;

	function initializeVariables() {
		randomComputerNumber = 19 + Math.floor(Math.random() * 102);
		amethystValue = 1 + Math.floor(Math.random() * 12);
		lapislazuliValue = 1 + Math.floor(Math.random() * 12);
		moldaviteValue = 1 + Math.floor(Math.random() * 12);
		rosequartzValue = 1 + Math.floor(Math.random() * 12);
		userTallyScore = 0;
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomComputerNumber);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
	}

	function hasUserWonOrLost() {
		if (userTallyScore > randomComputerNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		if (userTallyScore == randomComputerNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("amethystValue: ", amethystValue + " lapislazuliValue: " + lapislazuliValue + 
					" moldaviteValue: " + moldaviteValue + " rosequartzValue: " + rosequartzValue);
		console.log("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	

	initializeVariables();
	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        console.log(pressed);
        if (pressed == "amethyst1") {
        	userTallyScore += amethystValue;
        } else if (pressed == "lapislazuli2") {
        	userTallyScore += lapislazuliValue;
        } else if (pressed == "moldavite3") {
        	userTallyScore += moldaviteValue;
        } else if (pressed == "rosequartz4") {
        	userTallyScore += rosequartzValue;
        } else {
        	console.log("error");
        }
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        hasUserWonOrLost();
	});
});