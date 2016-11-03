'use strict';

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function isOneOrLessAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  if (str1 === str2) {
    return true
  }
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }
  if (str1.length === str2.length) {
      let oneAway = false

      for (let i = 0; i < str1.length; i ++) {
        if (str1[i] !== str2[i]) {
          if (oneAway) {
            return false

          }
          else {
            oneAway = true
          }
        }
      }
  }
  if (str1.length > str2.length) {
    let oneAway = false
    for (let i = 0; i < str2.length; i ++) {
      if (str1[i] !== str2[i] && str1[i+1] !== str2[i]) {
        return false
      }
    }
  }
  else if (str2.length > str1.length) {
    let oneAway = false
    for (let i = 0; i < str1.length; i ++) {
      if (str2[i] !== str1[i] && str2[i+1] !== str1[i]) {
        return false
      }
    }

  }
  return true
}
