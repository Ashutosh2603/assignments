/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .join("");
  console.log(str);
  let start = 0,
    end = str.length - 1;

  while (start < end) {
    if (str[start].toLowerCase() === str[end].toLowerCase()) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;
