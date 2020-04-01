/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      printArray(arr[i]);
    }
  } else {
    if (arr !== undefined) {
      console.log(arr);
    }
  }
};

module.exports = printArray;
