/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    for (let string1 = 0; string1 < str.length; string1++) {
        for (let string2 = string1 + 1; string2 < str.length; string2++) {
            if (str[string1] === str[string2]) {
                return false;
            }
        }
    }
    return true;
  } 
  
  
  console.log(hasUniqueCharacters("abcdefg")); 
  console.log(hasUniqueCharacters("hello"));   