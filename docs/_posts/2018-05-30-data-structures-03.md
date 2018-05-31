---
layout: post
title:  "Data Structures - Part 03: Sorting"
date:   2018-05-30
categories: DS
---

### Reference: 

Coursera's Algorithms, [Part I](https://www.coursera.org/learn/algorithms-part1) and [Part II](https://www.coursera.org/learn/algorithms-part2) by Robert Sedgewick and Kevin Wayen

### Quick Sort

```
let partition = function(list, lo, hi) {
    let k = list[lo];
    let i = lo + 1;
    let j = hi;
    while(true) {
        while(list[i] <= k) if(++i > j) break;
        while(list[j] >= k) if(i > --j) break;
        if(i > j) break;
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    let temp = list[lo];
    list[lo] = list[j];
    list[j] = temp;
    return j;
};

let quickSort = function(list, lo, hi) {
    if(lo >= hi) return;
    let p = partition(list, lo, hi);
    quickSort(list, lo, p-1);
    quickSort(list, p+1, hi);
};

let a = [1,3,2];
quickSort(a, 0, a.length - 1);
console.log(a);
```

    