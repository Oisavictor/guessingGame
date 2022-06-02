// initializing variables
x = 2;
points = 0;

// Welcome the user to make a guess
console.log("Hi dear, are you up for a game!....\nGuess a number that could make you win the next jackpot!!!");

//The logic
while(x) {
  num = Math.round(Math.random()*x) + 1;
  console.log('\n');
  console.log(`Enter a number between 1 - ${x} | To exist Enter the number 0`);
  guess = prompt("Enter the number you want to guess here: ");
  
  if (guess == 0){
    break;
  }else if (guess == num){
    x++;
    console.log(`Correct Guess!!. You have Earned: ${points = 1} Point. You are now in Stage: `,  x-1);
  }else{
    console.log("wrong Guess. Please try again");
  }
}
