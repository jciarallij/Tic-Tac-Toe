
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


function addSymbol(element) {                                        /////  ***** This ADD'S SYMBOLS ****** //////
	var buttonHeader = document.getElementById('message');
	if(element.innerHTML == '') { //This square is empty
		if(whosTurn == 1) {
			element.innerHTML = 'X';		
			whosTurn = 2;
			buttonHeader.innerHTML = "Player 2's Turn";
			buttonHeader.className = 'player-2';
			element.classList.remove('empty');  //Get rid of class 'empty', and add who took the square.
			element.classList.add('p1');  // adds an element to the array
			playerOneMarkings.push(element.id);

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








function checkWin() {       /////  ***** This CHECKS this win ****** //////


	
	var rowCount = 0;  // Loop through all winning possilities. RowCount nees to restart each time.
	var rowCountTwo = 0;
	var thisWinCombo;
	
	for (i=0; i<winners.length; i++){
		rowCount = 0;
		thisWinCombo = winners[i];
		
		for (j = 0; j < thisWinCombo.length; j++) { // Now, let's check if all the elements in the winners array, exist in the current player array.
			if (playerOneMarkings.indexOf(thisWinCombo[j]) > -1) { // Check if this box of the win combo we are on, is in the player's marking
				rowCount++;

			}
			else if (playerTwoMarkings.indexOf(thisWinCombo[j]) > -1) {
				rowCountTwo++;

			}
		}
			if (rowCount === 3){
				gameOver(thisWinCombo, 1);

			}
			if (rowCountTwo === 3){
				gameOver(thisWinCombo, 2);
				break;

			}
	}

}


function gameOver(combo,playerWinner) {
	var buttonHeader = document.getElementById('message');
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	if (playerWinner === 1) {
		buttonHeader.innerHTML = "Player 1 WINS!";
		buttonHeader.className = 'player-1';
	}
	else if {
		buttonHeader.innerHTML = "Player 2 WINS!";
		buttonHeader.className = 'player-2';
	}
	else {
		buttonHeader.innerHTML = "Draw!";
	}
}



// function computersTurn(){
// 	var emptySquares = document.getElementByClassName('empty');
// 	console.log(emptySquares);
// 	var randomEmptyBox = Math.floor(Math.random() * emptySquares.length);
// 	console.log(emptySquares[randomEmptyBox]);
	


// }






// }