class InvalidArgumentError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "InvalidArgumentError";
    }
}

function validateArguments(arr, target) {
    if(!Array.isArray(arr)) throw new InvalidArgumentError("First argument should be an array");
    if(arr.find(a => {
        return isNaN(a);
    })) throw new InvalidArgumentError("First argument should be an array of numbers");
    if(isNaN(target)) throw new InvalidArgumentError("Second argument should be a number");
}


function twoSum(arr, target) {
    validateArguments(arr, target);

    const map = {};
    let returnValue;
    arr.find((a, i) => {
        if(map.hasOwnProperty(target - a)) {
            returnValue = [map[target - a], i]
        } else {
            map[a] = i;
        }
    })
    return returnValue;
}

console.log(twoSum([1, 2, 3, 4], 4));
