//This variable keeps track of turns
let activePlayer = 'X';
//This array stores an array of moves, its used to determine the win conditions
let selectedSquares =[];

//This function is for placein an x or an o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasnt been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML elemetn id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whos turn it is
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in the html
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be X or O so, if not X it must be O
        } else {
            //If activeplayer is equal to O, the o.png is placed in the html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is x change it to o
            activePlayer = 'O'
            //if active player is anything other than x
        } else {
            //change the activePlayer to X
            activePlayer = 'X';
        }
        //This function plays placement sound
        audio('./media/place.mp3');
        //This conditon checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and click.
            setTimeout(function () {computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected by the computer
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected alread
        while (!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasnt been selected yet/
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditons.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    if (arrayIncludes('0X', '1X','2X')) { drawWinLine(50,100,558,100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508,558)}
    else if (arrayIncludes(
}