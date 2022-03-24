let numList = [1, 4, 11, 2, 37, -4];

let smallest = numList[0];
let largest = numList[0];

for (let i = 0; i < numList.length; i++) {
  if (smallest > numList[i]) {
    smallest = numList[i];
  } else if (largest < numList[i]) {
    largest = numList[i];
  }
}

console.log(smallest, largest);

console.log("The smallest value in this array: " + Math.min(...numList));
console.log("The largest value in this array: " + Math.max(...numList));

// // Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// // Write your solution below:
// let smallest = array[0]
// let largest = array[0]

// for (let i = 0; i < array.length; i++) {
//   if (smallest > array[i]) {
//     smallest = array[i]
//   } else if (largest < array[i]) {
//     largest = array[i]
//   }
// }

// console.log(smallest, largest)

console.log(Math.min(...array));
