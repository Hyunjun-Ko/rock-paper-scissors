/*
randomly select what computer will choose.
*/
function getComputerChoice() 
{
    let choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}


/*
given the selections of player and computer, determine who won and output corresponding message and the winnder 
to be called by the game() 
one call to playRound equals one round of game
*/
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")
    {
        switch (computerSelection)
        {
            case "rock":
                return [2,"It's a tie! Rock and Rock"];
            case "paper":
                return [1,"You Lose! Paper beats Rock"];
            case "scissors":
                return [0,"You Win! Rock beats Scissors"];
        }
    } 
    else if(playerSelection == "paper")
    {
        switch (computerSelection)
        {
            case "rock":
                return [0,"You Win! Paper beats Rock"];
            case "paper":
                return [2,"It's a tie! Paper and Paper"];
            case "scissors":
                return [1,"You Lose! Scissors beat Paper"];
        }
    }
    else if(playerSelection == "scissors")
    {
        switch (computerSelection)
        {
            case "rock":
                return [1,"You Lose! Rock beats Scissors"];
            case "paper":
                return [0,"You Win! Scissors beat Paper"];
            case "scissors":
                return [2,"It's a tie! Scissors and Scissors"];
        }
    }
    else
    {
        return [3,"Invalid Input"];
    }
}

/*
plays 5 rounds of rock paper scissiors. will later be replaced with for loop to determine out of how many games.
1. needs to work on the condition where the user input is invalid.
2. needs to work on a special exiting condition where the computer or winner first reaches 3 wins before all the rounds.
*/
function game()
{
    let player = 0;
    let computer = 0;

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("rock, paper, or scissors?");
    console.log("Computer Selection: " + computerSelection);
    let round = playRound(playerSelection, computerSelection);
    switch (round[0])
    {
        case 0:
            player += 1;
            console.log("Round 1 : " + round[1]);
            break;
        case 1:
            computer += 1;
            console.log("Round 1 : " + round[1]);
            break;
        case 2:
            console.log("Round 1 : " + round[1]);
            break;
        case 3:
            console.log("Round 1 : " + round[1]);
            break;
    }
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, or scissors?");
    console.log("Computer Selection: " + computerSelection);
    round = playRound(playerSelection, computerSelection);
    switch (round[0])
    {
        case 0:
            player += 1;
            console.log("Round 2 : " + round[1]);
            break;
        case 1:
            computer += 1;
            console.log("Round 2 : " + round[1]);
            break;
        case 2:
            console.log("Round 2 : " + round[1]);
            break;
        case 3:
            console.log("Round 2 : " + round[1]);
            break;
    }
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, or scissors?");
    console.log("Computer Selection: " + computerSelection);
    round = playRound(playerSelection, computerSelection);
    switch (round[0])
    {
        case 0:
            player += 1;
            console.log("Round 3 : " + round[1]);
            break;
        case 1:
            computer += 1;
            console.log("Round 3 : " + round[1]);
            break;
        case 2:
            console.log("Round 3 : " + round[1]);
            break;
        case 3:
            console.log("Round 3 : " + round[1]);
            break;
    }
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, or scissors?");
    console.log("Computer Selection: " + computerSelection);
    round = playRound(playerSelection, computerSelection);
    switch (round[0])
    {
        case 0:
            player += 1;
            console.log("Round 4 : " + round[1]);
            break;
        case 1:
            computer += 1;
            console.log("Round 4 : " + round[1]);
            break;
        case 2:
            console.log("Round 4 : " + round[1]);
            break;
        case 3:
            console.log("Round 1 : " + round[1]);
            break;
    }
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, or scissors?");
    console.log("Computer Selection: " + computerSelection);
    round = playRound(playerSelection, computerSelection);
    switch (round[0])
    {
        case 0:
            player += 1;
            console.log("Round 5 : " + round[1]);
            break;
        case 1:
            computer += 1;
            console.log("Round 5 : " + round[1]);
            break;
        case 2:
            console.log("Round 5 : " + round[1]);
            break;
        case 3:
            console.log("Round 1 : " + round[1]);
            break;
    }
    if (player > computer)
    {
        console.log("You Won!");
    } 
    else if (player < computer)
    {
        console.log("You Lost!");
    }
    else
    {
        console.log("Draw");
    }
}

game();
