var whosTurn = 1;
var a1;
var a2;
var a3;



function addSymbol(element){
	// console.log(element);
	if(element.innerHTML == ''){
		//This square is empty
		if(whosTurn == 1){
			element.innerHTML = 'X';		
			whosTurn = 2;
		}else{
			element.innerHTML = 'O';		
			whosTurn = 1;			
		}
	}else{
		//This square is taken.
		alert("Sorry, this spot is taken.")
	}
	
}

function checkBoard(){
    if (a1 === 'X' && a2 === 'X' && a3 === 'X') {
        alert('X Wins!');
    }
    else if (a1 === 'O' && a2 === 'O' && a3 === '0') {
        alert('O Wins!')
    }
}