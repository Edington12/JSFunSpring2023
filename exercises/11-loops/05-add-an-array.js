let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "sum".
 * It should be equal to the sum of all the numbers in an array.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let highest = numbers[0];
for (let number of numbers) {
  if (number > highest) 
    highest = number;
}
console.log(highest);