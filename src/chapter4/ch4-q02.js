'use strict';

import { Tree } from './helpers';

/**
 * As the list is already sorted the best way to create a balanced tree is by
 * adding the middle node (parent) then the children. The algorithm is basically
 * involves adding the middle element of which split of the array so that the
 * parent is added before the left and right children of each subtree.
 *
 * N = |values|
 * Time: O(N lg N)
 * Additional space: O(N)
 */
export function makeBalancedTree(values) {

  if (values && values.length) {

    add(values, 0, values.length - 1);
  }

}

function add(values, start, end) {

  if (end < start) {
    return null;
  }

  else{
    let mid = (start + end) / 2
    var tree = new Tree();
    tree.add(values[mid]);
    tree.left = add(values, start, mid - 1);
    tree.right = add(values, mid + 1, end);
  }
  return tree
}
