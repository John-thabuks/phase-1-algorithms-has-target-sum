function hasTargetSum(array, target) {
  // Write your algorithm here
    let result = []   
        for (let i = 0; i < array.length; i++) {
          for (let j = i+1; j < array.length; j++) {            
              if (array[i] + array[j] === target) {
                  result.push(array[i])
                  result.push(array[j])
                  return result
              }
          }
      }
      return result
}

/* 
  Write the Big O time complexity of your function here
  As you have more and more numbers to work with, 
  this code ends up doing a whole bunch of comparisons. 
  this means is that as your list of numbers gets bigger, 
  this code slows down significantly. 
  It doesn't just slow down a little; it gets slower and slower as you add more numbers. 
  it gets slower at a rate that's like multiplying the number of items in the list by itself, 
  and that's why we write it as O(n^2).
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    // Initialize an empty array to store the result
    result = []

    // Loop through the elements of the array
    for i from 0 to length of array - 1:
        // Nested loop to compare the current element with the rest of the elements
        for j from i + 1 to length of array:
            // If the sum of array[i] and array[j] equals the targetSum:
            if array[i] + array[j] is equal to target:
                // Add array[i] and array[j] to the result array
                result.push(array[i])
                result.push(array[j])
                // Return the result array
                return result

    // If no pair of numbers adds up to the target, return an empty array
    return result

*/

/*
  Add written explanation of your solution here
  A function called hasTargetSum that takes two inputs:

    1. An array of whole numbers.
    2. A single target number.
  The function's job is to determine if there is any pair of numbers within the array that, 
  when added together, equal the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
