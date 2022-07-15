// Function for generating a random selection for the computer
// and prompting the user to enter their selection
function computerPlay() {
  let rockPaperScissors = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  return rockPaperScissors[random];
}

// Function for playing a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return 'It\'s a tie!';
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose! Paper beats rock.';
    } else {
      return 'You win! Rock beats scissors.';
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose! Scissors beats paper.';
    } else {
      return 'You win! Paper beats rock.';
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats scissors.';
    } else {
      return 'You win! Scissors beats paper.';
    }
  }
  return 'You didn\'t enter a valid selection.';
}

// Function for playing 5 rounds  of rock paper scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, paper, or scissors?');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    
    // Increment the player's or computer's score if either player wins
    if (result.indexOf('You win!') > -1) {
      playerScore++;
    } else if (result.indexOf('You lose!') > -1) {
      computerScore++;
    } 
    
    // if either player has won 3 rounds end the game prematurely
    if (playerScore === 3 || computerScore === 3) {
      break;
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game!');
  } else {
    console.log('The game ended in a tie!');
  }
}


game()