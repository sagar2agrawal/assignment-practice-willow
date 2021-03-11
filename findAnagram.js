// it will find the anagram text with modification requirements

const findAnagram = (firstString, secondString) => {
  
  let firstInput = firstString;
  let secondInput = secondString;

  // Making sure that first String is bigger then second string
  if (firstString.length < secondString.length) {
    secondInput = firstInput;
    firstInput = secondInput;
  }

  firstInput = firstInput.split("");
  secondInput = secondString.split("");
  
  let matchKey = '';

  // adding all the elements that are common both string in the anagram variable
  const anagram = secondInput.filter((item) => {
    
    matchKey = firstInput.indexOf(item);

    if (matchKey !== -1) {
      firstInput.splice(matchKey, 1);
      return item;
    }    
  });
  
  return {
    anagramText: anagram.join(""),
    removedCharacterFromLargerString: firstInput.length,
    removedCharacterFromSmallerString: secondInput.length - anagram.length
  };

}

export default findAnagram;