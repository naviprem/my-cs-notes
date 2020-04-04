/*
Binary Search
 */


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