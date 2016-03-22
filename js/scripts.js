// ----------------------------------------- Declaring Global Variables --------------------------------

var winners =[
// horizontal Answers
	['a1', 'a2', 'a3'],
	['b1', 'b2', 'b3'],
	['c1', 'c2', 'c3'],
// vertical Answers
	['a1', 'b1', 'c1'],
	['a2', 'b2', 'c2'],
	['a3', 'b3', 'c3'],
// diagonal Answers
	['a1', 'b2', 'c3'],
	['c1', 'b2', 'a3'],
];
var whosTurn = 1;
var playerOneMarkings = [];
var playerTwoMarkings = [];
var gameHeader = $('#message');
var playerMode;
var computer;

// ----------------------------------------- Click Function ---------------------------------------------

$(document).ready(function(){
	$('button').click(function(){
		var clickedButton = ($(this).attr('id'));
		if(clickedButton == 'player-one'){
			// console.log('#player-one');
			onePlayer();
		}else if(clickedButton == 'player-two'){
			// console.log('#player-two');
			twoPlayer();
		}else if(clickedButton == 'replay'){
			replay();
		
		};
	});

	$('.box').click(function(){
			// console.log(this);
			addSymbol(this);
	})


});

// ----------------------------------------- One Players ---------------------------------------------

function onePlayer(){
	computer = true;
	var playerMode = 1;
	var box = $('.box');
	for(i=0; i<box.length; i++) {
		box[i].style.pointerEvents = 'auto';
	}
	// $('player-one').prop('disabled',true);
	// $('player-two').prop('disabled',true);
}

// ----------------------------------------- Two Players ---------------------------------------------

function twoPlayer(){
	computer = false;
	playerMode = 2;
	$('#message').innerHTML = 'Player 1\'s turn!';
	var box = $('.box');
	for(i=0; i<box.length; i++) {
		box[i].style.pointerEvents = 'auto';
	}
	// $('player-one').prop('disabled',true);
	// $('player-two').prop('disabled',true);
}

// ----------------------------------------- Add Symbols to board ------------------------------------

function addSymbol(element){  
	console.log(element)
	if(element.innerHTML == '') { 
		if(whosTurn == 1) {
			element.innerHTML ='X';		
			whosTurn = 2;
			gameHeader.html("Player 2's Turn");
			gameHeader.addClass('player-2');
			$(element).removeClass('.empty');  
			$(element).addClass('.p1'); 
			playerOneMarkings.push(element.id);
			checkWin();
			if(computer == true){
				computersTurn();
			}
		
		}
		else {
			element.innerHTML ='O';		
			whosTurn = 1;
			gameHeader.html("Player 1's Turn");
			gameHeader.addClass('player-1');
			$(element).removeClass('empty');
			$(element).addClass(' p2');         
			playerTwoMarkings.push(element.id);	
		}
	}
	else {
		gameHeader.html("Box is taken");
		gameHeader.addClass('red');
	}

	checkWin();
}

// ----------------------------------------- Computers Turn ----------------------------------------

function computersTurn(){
	//It has to be O's turn. Put an O in.
	// Get a random, empty square.
	var arrayOfEmptySquares = $('.empty');
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = 'O';
	whosTurn = 1;
	gameHeader.innerHTML = "It is Player 1's turn";
	gameHeader.addClass('player-one');
	$(element).removeClass('empty');
	$(element).addClass('p2');
	playerTwoMarkings.push(element.id);	
	checkWin();
}

// ----------------------------------------- Check Win ---------------------------------------------

function checkWin() {     
	var rowCount = 0;  
	var rowCountTwo = 0;
	var thisWinCombo;
	for (var i=0; i<winners.length; i++){
		rowCount = 0;
		rowCountTwo = 0;
		thisWinCombo = winners[i];


		for (j = 0; j < thisWinCombo.length; j++) {
			if (playerOneMarkings.indexOf(thisWinCombo[j]) > -1) { 
				rowCount++;
			}
			if (playerTwoMarkings.indexOf(thisWinCombo[j]) > -1) {
				rowCountTwo++;
			}
		}
		if (rowCount === 3){
			gameOver(thisWinCombo, 1);
			break;
		}
		 if(rowCountTwo === 3){
			gameOver(thisWinCombo, 2);
			break;
		}

	}

}

// ----------------------------------------- Game Over ---------------------------------------------

function gameOver(combo,playerWinner) {
	for(i=0; i<$(combo).length; i++){
		$(combo[i]).addClass('winner');
	}
	if(playerWinner == 2){
		gameHeader.addClass('player-2');
		// $('#replay').show();		
	}
	gameHeader.innerHTML = 'Player ' + playerWinner + ' , won the game!';
	// $('#replay').show();	
}

// ----------------------------------------- Score Function ----------------------------------------

// ----------------------------------------- Tie Function ------------------------------------------
