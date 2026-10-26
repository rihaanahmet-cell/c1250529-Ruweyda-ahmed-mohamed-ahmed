let secretNumber = 7;
let attempts = 0;

let guess = Number(prompt("Guess a number:"));
attempts++;

while (guess !== secretNumber) {
    if (guess > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }

    guess = Number(prompt("Guess again:"));
    attempts++;
}

console.log("Congratulations! Correct number.");
console.log("You tried " + attempts + " times.");
