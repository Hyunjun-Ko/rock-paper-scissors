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
keeps track of points until a winner is decided by whoever reaches 5 points first.
it then declares the winner and resets the points and round #. 
*/
function game()
{
    let player = 0;
    let computer = 0;
    let round = 1;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            let computerSelection = getComputerChoice();
            let result = playRound(button.id,computerSelection);
            const output = document.querySelector('#output');
            output.textContent = `Computer Selection: ${computerSelection}\r\n`;
            switch (result[0])
            {
            case 0:
                player += 1;
                output.textContent += `Round ${round++} : ${result[1]}\r\n`;
                output.textContent += `you : ${player} vs computer : ${computer}`;
                break;
            case 1:
                computer += 1;
                output.textContent += `Round ${round++} : ${result[1]}\r\n`;
                output.textContent += `you : ${player} vs computer : ${computer}`;
                break;
            case 2:
                output.textContent += `Round ${round++} : ${result[1]}\r\n`;
                output.textContent += `you : ${player} vs computer : ${computer}`;
                break;
            case 3:
                output.textContent += `Round ${round++} : ${result[1]}\r\n`;
                output.textContent += `you : ${player} vs computer : ${computer}`;
                break;
            }

            if (player == 5)
            {
                output.textContent = 'You won!\r\n';
                output.textContent += `you : ${player} vs computer : ${computer}`;
                player = 0;
                computer = 0;
                round = 1;
            }
            
            if (computer == 5)
            {
                output.textContent = 'You Lost!\r\n';
                output.textContent += `you : ${player} vs computer : ${computer}`;
                player = 0;
                computer = 0;
                round = 0;
            }

        })
    });

}

game();
