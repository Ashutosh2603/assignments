/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let obj = {},
    i = 0;

  if (str1.length !== str2.length) {
    return false;
  }
  while (i < str1.length) {
    if (obj[str1[i].toLowerCase()]) {
      obj[str1[i].toLowerCase()]++;
    } else {
      obj[str1[i].toLowerCase()] = 1;
    }
    i++;
  }
  for (i = 0; i < str1.length; i++) {
    if (obj[str2[i].toLowerCase()]) {
      obj[str2[i].toLowerCase()]--;
    }
  }
  if (Object.values(obj).every((el) => el === 0)) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
