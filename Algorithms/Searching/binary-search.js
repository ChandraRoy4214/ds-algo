// Binary search algorithm

// this is a bit more efficient than linear search
// but the only pre-requisite is that the data should be sorted...

// works on the principle of divide and conquer
// on every iteration the data is divided into half...

// worst case runtime complexity === O(logn)
// best time complexity === omega(1)

let data = [];

for (let i = 0; i <= 10000; i++) {
    data[i] = i;
}

console.log(data);


function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
  
    if (val === arr[mid]) {
      return `found the value at the location ${arr[mid]}`
    }
  
    if (start >= end) {
      return -1;
    }
  
    return val < arr[mid]
      ? binarySearch(arr, val, start, mid - 1)
      : binarySearch(arr, val, mid + 1, end);
  }


const searching = binarySearch(data, 234);

console.log(searching);