
var winners =[
// Horz Answers
	['a1', 'a2', 'a3'],
	['b1', 'b2', 'b3'],
	['c1', 'c2', 'c3'],
// Vert Answers
	['a1', 'b1', 'c1'],
	['a2', 'b2', 'c2'],
	['a3', 'b3', 'c3'],
// Diag Answers
	['a1', 'b2', 'c3'],
	['c1', 'b2', 'a3'],
];
var whosTurn = 1;
var playerOneMarkings = [];
var playerTwoMarkings = [];
var buttonHeader = document.getElementById('message');

function addSymbol(element) {  /////  ***** This ADD'S SYMBOLS ****** //////
	
	if(element.innerHTML == '') { //This square is empty
		if(whosTurn == 1) {
			element.innerHTML = 'X';		
			whosTurn = 2;
			buttonHeader.innerHTML = "Player 2's Turn";
			buttonHeader.className = 'player-2';
			element.classList.remove('empty');  //Get rid of class 'empty', and add who took the square.
			element.classList.add('p1');  // adds an element to the array
			playerOneMarkings.push(element.id);
			// checkWin();

			// If player chooses '1 Player'
			// computersTurn();
		}
		else {
			element.innerHTML = 'O';		// It has to be O's turn. Put an O in,
			whosTurn = 1;
			buttonHeader.innerHTML = "Player 1's Turn";
			buttonHeader.className = 'player-1';
			element.classList.remove('empty');
			element.className += ' p2';         
			playerTwoMarkings.push(element.id);	
		}
	}
	else {
		buttonHeader.innerHTML = "Box is taken";
		buttonHeader.className = 'red';
	}

	checkWin();
}


// function computersTurn(){
// 	//It has to be O's turn. Put an O in.
// 	// Get a random, empty square.
// 	var arrayOfEmptySquares = document.getElementsByClassName('empty');
// 	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
// 	var element = arrayOfEmptySquares[randomEmptySquareIndex];
// 	element.innerHTML = 'O';
// 	whosTurn = 1;
// 	gameHeader.innerHTML = "It is Player 1's turn";
// 	gameHeader.className = 'player-one';
// 	element.classList.remove('empty');
// 	element.classList.add('p2');
// 	playerTwoMarkings.push(element.id);	
// 	checkWin();
// }





function checkWin() {       /////  ***** This CHECKS this win ****** //////


	
	var rowCount = 0;  // Loop through all winning possilities. RowCount nees to restart each time.
	var rowCountTwo = 0;
	var thisWinCombo;
	
	for (i=0; i<winners.length; i++){
		rowCount = 0;
		rowCountTwo = 0;
		thisWinCombo = winners[i];
		
		for (j = 0; j < thisWinCombo.length; j++) { // Now, let's check if all the elements in the winners array, exist in the current player array.
			if (playerOneMarkings.indexOf(thisWinCombo[j]) > -1) { // Check if this box of the win combo we are on, is in the player's marking
				rowCount++;

			}
			if (rowCount === 3){
				gameOver(thisWinCombo, 1);
			}
		}
			if (playerTwoMarkings.indexOf(thisWinCombo[j]) > -1) {
				rowCountTwo++;

			

			}
			 if(rowCountTwo === 3){
				gameOver(thisWinCombo, 2);
			}	break;
	
	}

}


function gameOver(combo,playerWinner) {
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	buttonHeader.innerHTML = 'Player ' + playerWinner + ' , won the game!';
}
// 	var replay = document.getElementsByTagName("button");
// 	for(i=0; i<buttons.length; i++){
// 		buttons[i].disabled = true;

// 		buttons[i].style.pointerEvents = 'none';
// 	}


// function resetGame() {
// 	Clear Player Arrays
// 	Clear innerHTML of emptySquares
// 	Updates wins to counter for the winning playerOneMarkings
// 	Undisable the boxes
// }