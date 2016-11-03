'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if (!str) {
    return str;
  }
  let nuString = ''
  let compressed = 1
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === str[i+1]) {
      compressed ++
    }
    else {

      nuString += compressed
      nuString += str[i]

      compressed = 1
    }
  }
  if (nuString.length >= str.length) {
  return str
  }
  else {
    return nuString
  }

}
