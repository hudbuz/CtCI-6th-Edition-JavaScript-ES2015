'use strict';

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  if (!str) {
    return false
  }
  if (str === [] || str === ' ') {
    return true
  }
  var hash = {}
  for (let i = 0; i < str.length; i ++) {
    if (hash[str[i]] !== undefined) {
      hash[str[i]] ++
    }
    else {
      hash[str[i]] = 1
    }
  }
  var counter = 0
  for (let c = 0; c < Object.keys(hash).length; c ++) {
    if (counter > 1) {
      return false
    }
    else {
      if (hash[Object.keys(hash)[c]] === 1) {
        counter ++
      }
    }
  }
  return true

}
