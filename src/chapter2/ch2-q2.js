'use strict';

import { getLength } from './helpers';

/**
 * Walk one pointer ahead k nodes first then create a second pointer to the
 * start of the list. Walk both pointers until the first one hits the end of the
 * list, at that point the second pointer will be pointing to the kth to last
 * node.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastTwoPointers(list, k) {
  if (!list) {
    throw new Error('invalid list');
  }

  let last = list,
    kth = list;

  for (var i = 0; i < k; i ++) {
    last = last.next
  }
  while (last !== null) {
    kth = kth.next

    if (last.next === null) {
      return kth.val
    }
    else{
      last = last.next
    }
  }
}

/**
 * Determine the length of the input list. Subtract k from the calculated length
 * and skip that many nodes from the start of the list. That node is the kth to
 * last.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastLength(list, k) {
  if (!list) {
    throw new Error('invalid list');
  }
  var currentNode = list
  var length = 0
  while (currentNode !== null) {
    length ++
    currentNode = currentNode.next
  }
  while (list !== null) {
    length --
    list = list.next
    if (length-1 === k) {
      return list.val
    }
  }



}
