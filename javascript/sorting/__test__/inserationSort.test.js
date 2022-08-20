'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort Test', () => {
  it('Sample arrays', () => {
    let arr1 = [8, 4, 23, 42, 16, 15];
    insertionSort(arr1);
    expect(arr1).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('Reverse-sorted', () => {
    let arr2 = [20, 18, 12, 8, 5, -2];
    insertionSort(arr2);
    expect(arr2).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques', () => {
    let arr3 = [5, 12, 7, 5, 5, 7];
    insertionSort(arr3);
    expect(arr3).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('Nearly-sorted', () => {
    let arr4 = [2, 3, 5, 7, 13, 11];
    insertionSort(arr4);
    expect(arr4).toEqual([2, 3, 5, 7, 11, 13]);
  });
});