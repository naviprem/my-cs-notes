---
layout: post
title:  "Data Structures - Part 01: Order of growth"
date:   2018-05-30
categories: DS
---

### Reference: 

Coursera's Algorithms, [Part I](https://www.coursera.org/learn/algorithms-part1) and [Part II](https://www.coursera.org/learn/algorithms-part2) by Robert Sedgewick and Kevin Wayen

### Order of growth classification:

* `Constant: O(1)` Code that has no loops in it. e.g. a = b + c
* `Lograthmic: O(log n)` Code has some kind of loops where inputs are divid in half. e.g. Binary Search
* `Linear: O(n)` Has a loop that processes every input. e.g. Find the maximum
* `Linearithmic: O(n log n)` Divide and Conquer algorithms. e.g. Merge sort
* `Quadratic: O(n^2)` Code that has (nested) double loop. e.g. check all pairs in the input
* `Cubic: O(n^3)` triple loop. e.g. check all triples
* `Exponential: O(2^n)` code that performs exhaustive search on the inputs. e.g. check all subsets

### Memory requirements

* Typical memory usage for primitive types

|types|bytes|
|---|---|
|bool|1|
|byte|1|
|char|2|
|int|4|
|float|4|
|long|8|
|double|8|
|Array overhead| 24|
|Object overhead| 16 + padding (memory allocated in multiples of 8)|
|String overhead| 64|
|reference/pointers| 8|


### Binary Search

* `Goal:` Given a sorted array and a key, find index of the key in tha array

* `Approach:` 
    * Compare key against middle entry, 
    * if too small go left,
    * if too big go right,
    * if equal return index.

* `Time Complexity: O(log n)`
* `Space Complexity: O(1)`

```angular2html
let binarySearch = function(a, searchKey) {
    let lo = 0;
    let hi = a.length - 1;
    while (lo <= hi) {
        let mid = parseInt(lo + (hi - lo)/2);
        if(searchKey < a[mid]) hi = mid - 1;
        else if(searchKey > a[mid]) lo = mid + 1;
        else return mid;
    }
    return -1;
};

let a = [-4, -1, 5, 7, 8, 9, 11, 14, 20];
let searchKey = -1;
index = binarySearch(a, searchKey);
console.log(index);
```


### 3 Sum

* `Goal:` Given an array, find sets of 3 elements that summ up to 0

* `Approach:` 
    * sort the array
    * search for compliment of sum of pairs

* `Time Complexity: O(n^2 log n)`
* `Space Complexity: O(n)`
    
```angular2html
let threeSum = function(a) {
    let threeSumArray = [];
    let len = a.length;
    let sorted = a.sort();
    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j<len-1; j++) {
            let compliment = -(sorted[i] + sorted[j]);
            if(sorted.slice(j+1).includes(compliment))
                threeSumArray.push([sorted[i], sorted[j], compliment]);
        }
    }
    return threeSumArray;
};

let a = [-4, -1, 5, 7, 8, -9, -2, 1, 2, 11, 14, 20];
result = threeSum(a);
console.log(result);
```

    