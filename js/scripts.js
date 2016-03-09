
var winners =[
// horizontal Answers
	['a1', 'a2', 'a3'],
	['b1', 'b2', 'b3'],
	['c1', 'c2', 'c3'],
// vertical Answers
	['a1', 'b1', 'c1'],
	['a2', 'b2', 'c2'],
	['a3', 'b3', 'c3'],
// diagnol Answers
	['a1', 'b2', 'c3'],
	['c1', 'b2', 'a3'],
];

var whosTurn = 1;
var playerOneMarkings = [];
var playerTwoMarkings = [];
var gameHeader = document.getElementById('message');
var playerMode;
var computer;

function onePlayer(){
	computer = true;
	document.getElementById
	var playerMode = 1;

	var box = document.getElementsByClassName('box');
	for(i=0; i<box.length; i++) {
		box[i].style.pointerEvents = 'auto';
	}

}

function twoPlayer(){
	computer = false;
	playerMode = 2;
	document.getElementById('message').innerHTML = 'Player 1\'s turn!';
	var box = document.getElementsByClassName('box');
	for(i=0; i<box.length; i++) {
		box[i].style.pointerEvents = 'auto';
	}
}
function addSymbol(element) {  
	
	if(element.innerHTML == '') { 
		if(whosTurn == 1) {
			element.innerHTML = 'X';		
			whosTurn = 2;
			gameHeader.innerHTML = "Player 2's Turn";
			gameHeader.className = 'player-2';
			element.classList.remove('empty');  
			element.classList.add('p1'); 
			playerOneMarkings.push(element.id);
			checkWin();
			if(computer == true){
				computersTurn();
			}
		
		}
		else {
			element.innerHTML = 'O';		
			whosTurn = 1;
			gameHeader.innerHTML = "Player 1's Turn";
			gameHeader.className = 'player-1';
			element.classList.remove('empty');
			element.className += ' p2';         
			playerTwoMarkings.push(element.id);	
		}
	}
	else {
		gameHeader.innerHTML = "Box is taken";
		gameHeader.className = 'red';
	}

	checkWin();
}


function computersTurn(){
	//It has to be O's turn. Put an O in.
	// Get a random, empty square.
	var arrayOfEmptySquares = document.getElementsByClassName('empty');
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = 'O';
	whosTurn = 1;
	gameHeader.innerHTML = "It is Player 1's turn";
	gameHeader.className = 'player-one';
	element.classList.remove('empty');
	element.classList.add('p2');
	playerTwoMarkings.push(element.id);	
	checkWin();
}





function checkWin() {     


console.log(playerOneMarkings);
console.log(playerTwoMarkings);
	
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


function gameOver(combo,playerWinner) {
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	if(playerWinner == 2){
		gameHeader.className = 'player-2';
		document.getElementById('replay').style.display = 'block';		
	}
	gameHeader.innerHTML = 'Player ' + playerWinner + ' , won the game!';
	document.getElementById('replay').style.display = 'block';	
}


