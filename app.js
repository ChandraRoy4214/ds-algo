let numbers = [5,4,56,7,8];
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];



function  sortData(array) {
    for(let i = 0; i< array.length; i++){

      let min = i
      let temp = array[i]

      for (let j = i+1; j < array.length; j++) {
          if(array[i] > array[j]){
              min = j;
          }
        
      }
      array[i] = array[min];
      array[min] = temp
    }

    return array

}


const sortedArray = sortData(numbers);

console.log(sortedArray);