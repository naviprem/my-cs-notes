/*
Quick sort
 */


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