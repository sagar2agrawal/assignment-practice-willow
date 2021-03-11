// The module to find a minimum positive number from the sum of elements of array

const minimumPositiveNumber = arr => {
  const inputArray = [...arr];
  
  // using javascript in built sort function
  inputArray.sort((a,b) => a - b);

  let index = 0;
  let sum = 1;

  while (inputArray[index] <= sum) {    
    sum = sum + inputArray[index];
    index++; 
  }

  return sum;
};


export default minimumPositiveNumber;