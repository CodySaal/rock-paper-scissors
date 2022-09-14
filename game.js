// Define array for choices [r, p, s]
// Define var for computerChoice
// Define var for playerChoice
// Define var for wins
// Define var for losses
// Define var for ties

// prompt humanChoice

// randomly choose computerChoice

// compare choices
    // 

// display (alert) comparison results (won, tied, lost round)

// show stats (number of wins, losses, and ties)

// play again?
    // restart game
// else 
    // end game


    var wins = 0;
    var ties = 0;
    var losses = 0;

    var choices = ["R", "P", "S" ]

    var startGame = function() {
        // Promts and stores human choice
        var playerChoice = prompt("Chose R, P, or S:");

        playerChoice = playerChoice.toUpperCase();
        // Chooses a random number to use for computer choice
        var randomNumber = Math.floor(Math.random()*choices.length);
        // Computer chooses 
        var computerChoice = choices[randomNumber];

        alert("The computer chose " + computerChoice);

        if (playerChoice === computerChoice){
            alert("That is a tie!");
            ties++;
        } else if( playerChoice === "R" && computerChoice === "S" || playerChoice === "S" && computerChoice === "P" || playerChoice === "P" && computerChoice === "R"){
            alert("You Win!!!")
            wins++;
        } else {
            alert("You lose!");
            losses++;
        }

        // \n adds a new line
        alert(
            "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
        );

        var playAgain =confirm("Play Again!");

        if (playAgain) {
            startGame();
        }

    }

startGame();