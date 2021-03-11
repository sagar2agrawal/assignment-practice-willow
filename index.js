import repeatNumber from './repeatNumber.js';
import minimumPositiveNumber from './minimumPositiveNumber.js';
import findAnagram from './findAnagram.js';

// here is the part where you can use the find the repeat number after break
const repeatNumberInputArray = [0,1,'a',2,'a'];
console.log('Repeat Number after break: ', repeatNumber(repeatNumberInputArray), '\n');


// here is the part where you can use the find minimum positive number task
const minimumPostiveNumberInputArray = [4,1,2,3,12];
console.log('Minimum positive number not possible with sum of array elements: ', minimumPositiveNumber(minimumPostiveNumberInputArray), '\n');


// here is the part where you can use the findanagram task
const firstInputString = "sagarlp";
const secondInputString = "ragask";
console.log("Finding Anagram: ", findAnagram(firstInputString, secondInputString), '\n');