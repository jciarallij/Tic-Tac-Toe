// ----------------------------------------- Declaring Global Variables --------------------------------

var winners =[
// Horizontal Combos
	['a1', 'a2', 'a3'],
	['b1', 'b2', 'b3'],
	['c1', 'c2', 'c3'],
// Vertical Combos
	['a1', 'b1', 'c1'],
	['a2', 'b2', 'c2'],
	['a3', 'b3', 'c3'],
// Diagonal Combos
	['a1', 'b2', 'c3'],
	['c1', 'b2', 'a3']
];
var whosTurn = 1;
var playerOneMarkings = [];
var playerTwoMarkings = [];
var gameHeader = $('#message');
var playerMode;
var computer;
var winsPlayerOne;
var winsPlayerTwo;

// ----------------------------------------- Click Function ---------------------------------------------

$(document).ready(function(){
	$('button').click(function(){
		var clickedButton = ($(this).attr('id'));
		if(clickedButton == 'player-one'){
			
			onePlayer();
		}else if(clickedButton == 'player-two'){
			
			twoPlayer();
		}else if(clickedButton == 'play-again-button'){
			resetGame();
		
		};
	});

	$('.box').click(function(){
			addSymbol($(this));
	});


});

// ----------------------------------------- One Players ---------------------------------------------

function onePlayer(){
	computer = true;
	playerMode = 1;
	$('#message').html('Your Turn!');
	$('.box').css('pointer-events','auto');
	$('player-one').prop('disabled',true);
	$('player-two').prop('disabled',true);
}

// ----------------------------------------- Two Players ---------------------------------------------

function twoPlayer(){
	computer = false;
	playerMode = 2;
	$('#message').html('Player 1\'s turn!');
	$('.box').css('pointer-events','auto');
	$('player-one').prop('disabled',true);
	$('player-two').prop('disabled',true);
}

// ----------------------------------------- Add Symbols to board ------------------------------------

function addSymbol(element){  
	console.log(element)
	if($(element).html() == '') { 
		if(whosTurn == 1) {
			$(element).html('X');		
			whosTurn = 2;
			$(gameHeader).html("Player 2's Turn");
			$(gameHeader).addClass('player-2');
			$(element).removeClass('.empty');  
			$(element).addClass('.p1'); 
			playerOneMarkings.push($(element).attr('id'));
			checkWin();
			if(computer == true){
				computersTurn();
			}
		
		}
		else {
			$(element).html('O');		
			whosTurn = 1;
			$(gameHeader).html("Player 1's Turn");
			$(gameHeader).addClass('player-1');
			$(element).removeClass('empty');
			$(element).addClass('p2');         
			playerTwoMarkings.push($(element).attr('id'));
		}
	}
	else {
		$(gameHeader).html("Box is taken");
		$(gameHeader).addClass('error');
	}

	checkWin();
}

// ----------------------------------------- Computers Turn ----------------------------------------

function computersTurn(){
	
	var arrayOfEmptySquares = $('.empty');
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	$(element).html('O');
	whosTurn = 1;
	$(gameHeader).html("It is Player 1's turn");
	$(gameHeader).addClass('player-one');
	$(element).removeClass('empty');
	$(element).addClass('p2');
	playerTwoMarkings.push($(element).attr('id'));
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
			$('.box').css('pointer-events','none');
			break;
		}
		 if(rowCountTwo === 3){
			gameOver(thisWinCombo, 2);
			$('.box').css('pointer-events','none');
			break;
		}

	}

}

// ----------------------------------------- Game Over ---------------------------------------------

function gameOver(combo, playerWhoWon){
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	for(i=0; i<combo.length; i++){
		
	}

	$(gameHeader).html('Player ' + playerWhoWon + ' , won the game!');

	var buttons = document.getElementsByTagName("button");
	for(i=0; i<buttons.length; i++){
		buttons[i].disabled = true;
	}
	$('#play-again-button').removeAttr('disabled');

	if(playerWhoWon==1){
		winsPlayerOne++;
	}else{
		winsPlayerTwo++;
	}

	$('#play-again-button').disabled = false;
	$('#play-again').css('display', 'block');
}


// ----------------------------------------- Reset Function ----------------------------------------

function resetGame(){
	
	playerOneMarkings = [];
	playerTwoMarkings = [];
	
	$(".box").each(function(){
		$(this).html('');
		$(this).addClass('empty');
		$(this).removeClass('winner');
	})

	// $('#one-player').removeAttr('disabled');
	// $('#two-players').removeAttr('disabled');

	$('#play-again').css('display','none');
	$('.box').css('pointer-events','none');
	$('#player-one').prop('disabled',false);
	$('#player-two').prop('disabled',false);
	$('#message').html('Next Game! Choose');

	
}

// var boxWidth = $('#a1').width();
// $('.box').each(function(){
// 	$(this).css('height', boxWidth + 'px');
// })

// ----------------------------------------- Tie Function ------------------------------------------
