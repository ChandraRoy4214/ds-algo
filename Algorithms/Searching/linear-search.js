// Walk Through of problem statement

// searching through data inside an array or similar datatype to be honest...
// one element at a time  and one after one in a sequence...

// time complexity === O(n)
// runtime complexity === omega(1)

// low level data
let data = [];

for (let i = 0; i <= 10000; i++) {
    data[i] = i;
}


function linearSearch(data){

   return data.forEach((i) => {
        if(i === 523){
            console.log(`your secret number is inside this array ${i}`);
            
        }
    })
    
}

linearSearch(data)
