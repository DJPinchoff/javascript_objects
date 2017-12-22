function convertToDegrees(radians) {
  var degrees;

  degrees = (radians * 180) / Math.PI;
  return degrees;
}

console.log(convertToDegrees(1));
console.log(convertToDegrees(2 * Math.PI));
