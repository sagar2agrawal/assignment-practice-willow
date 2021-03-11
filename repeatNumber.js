// Repeat number after break

const repeatNumber = (arr) => {
  const map = new Map();

  for(let i = 0; i < arr.length; i++){
    if (map.get(arr[i])) {
      if (arr[i-1] !== arr[i]) {
        return arr[i];
      }
    } else {
      map.set(arr[i],1);
    }
  }

  return null;
};

export default repeatNumber;
