/*

Find the median of 2 sorted arrays
 */

let overlappingArrayMedian = function(a,b) {
    // overlapping arrays

    let alen = a.length;
    let blen = b.length;

    let alow = 0, blow = 0;
    let ahi = a.length - 1;
    let bhi = b.length - 1;
    let low = null, hi = null;
    do {
        if(a[alow] < b[blow] || blow === blen) {
            low = a[alow];
            alow++;
        } else {
            low = b[blow];
            blow++
        }

        if(a[ahi] > b[bhi] || bhi === -1) {
            hi = a[ahi];
            ahi--
        } else {
            hi = b[bhi];
            bhi--;
        }
    } while (low < hi);

    if(low === hi) {
        return low;
    } else {
        return (low + hi) / 2;
    }
};


let findMedian = function(a, b) {
    let alen = a.length;
    let blen = b.length;

    // non overlapping arrays
    let c = null;
    if(alen === 0 )
        c = b;
    else if (blen === 0)
        c = a;
    else if (a[alen - 1] < b[0])
        c = a.concat(b);
    else if (b[blen - 1] < a[0])
        c = b.concat(a);
    else
        return overlappingArrayMedian(a, b);


    let clen = c.length;
    let mid = parseInt(clen/2);
    if (clen % 2 === 0) {
        return (c[mid] + c[mid-1]) / 2;
    } else {
        return c[mid];
    }
};

console.log(findMedian([1, 3, 4], [2]));


