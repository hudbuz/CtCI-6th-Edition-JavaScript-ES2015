'use strict';

import { LinkedList } from './helpers';

/**
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */
export function listTreeByDepthOrder(tree) {
  let lists = [];
  addToList(tree.root, lists, 0)
  return lists
  }

function addToList(root, lists, depth) {
  if (lists[depth] === undefined){
    lists[depth] = new LinkedList();
  }

  lists[depth].append(root.val)
  addToList(root.left, lists, depth +1)
  addToList(root.right, lists, depth + 1)
}
