// Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer between those numbers (including both of the numbers). Your solution should handle the scenario that the user inadvertently swaps the positions of the min and max values or the scenario that the min and max values are equal. You may assume that the user always provides the min and max values.

function randomInt(min, max) {
  var temp;

  if (min === max) { return min; }
  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRange(5, 5));
console.log(randomRange(1, 10));
console.log(randomRange(20, 10));
