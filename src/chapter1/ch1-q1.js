

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(set){
  var check = {}
  var counter = 0
  for (let i = 0; i < set.length; i ++) {
    counter = counter + 1
    if (check[set[i]] !== undefined){

      return false
    }
    else {
      check[set[i]] = 1
    }

  }

  return true
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSort(str) {
  // sort string using quicksort
  console.log('first')
  var sorted = sort(str)
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === str[i + 1]) {
      return false
    }
  }
  return true
  }


function sort(string) {
  console.log(string)
  for (let i = string.length; i >= 0; i --) {
    for (let j = 0; j < i; j ++) {
      if (string[j+1] < string[j]) {
        let bubble = string[j+1]
        string[j + 1] = string[j]
        string[j] = bubble

    }
    }
  }
  console.log(string)
  return string
}
