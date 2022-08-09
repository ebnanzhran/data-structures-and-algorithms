'use strict';

let arr1 = [8, 4, 23, 42, 16, 15]
let arr2 = [20, 18, 12, 8, 5, -2]
let arr3 = [5, 12, 7, 5, 5, 7]
let arr4 = [2, 3, 5, 7, 13, 11]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

console.log(insertionSort(arr1))
console.log(insertionSort(arr2))
console.log(insertionSort(arr3))
console.log(insertionSort(arr4))

module.exports = insertionSort;