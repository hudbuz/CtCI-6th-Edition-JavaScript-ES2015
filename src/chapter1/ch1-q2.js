

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  if (str1.length !== str2.length) {
    return false

  }
  var map1 = {}
  var map2 = {}
  for (let i = 0; i < str1.length; i ++) {
    if (map1[str1[i]] !== undefined) {
      map1[str1[i]] = map1[str1[i]] + 1
    }
    else{
      map1[str1[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i ++) {
    if (map2[str2[i]] !== undefined) {
      map2[str2[i]] = map2[str2[i]] + 1
    }
    else{
      map2[str2[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i ++) {
    if (map1[str2[i]] !== map2[str2[i]]){
      return false
    }
  }
  return true
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationSorted(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  // sort string using quicksort
  str1.sort();
  str2.sort();

  return str1.every((v, i) => v === str2[i]);
}
