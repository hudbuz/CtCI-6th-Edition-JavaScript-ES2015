'use strict';

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list) {
  if (!list) {
    return list;
  }
  let newList = {}
  let nodeArray = []
  var currentNode = list
  while (currentNode !== null) {
    let next = currentNode.next
    if (newList[currentNode.val] === undefined){
      debugger
      newList[currentNode.val] = 1
      nodeArray.push(currentNode.val)
      currentNode = next
    }
    else {
      currentNode = next
    }
  }
  console.log(nodeArray)

  return nodeArray; // return list, head will never change
}
