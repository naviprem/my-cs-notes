/*
3 Sum
 */


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