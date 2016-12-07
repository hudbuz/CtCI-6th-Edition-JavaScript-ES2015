'use strict';

/**
 * To check if a tree is a valid BST we need to check that all the values under
 * a node are within the ranges defined by the path we took to get there. For
 * example, initially the root can have any value, every time we go down a left
 * child that sets an upper bound on the valid values of their children by that
 * nodes value. Every time you travel down the right child you lower bound the
 * valid values of their children by that nodes value.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - due to recursion. Assumes a balanced tree, worst
 * case is O(N)
 */
export function isValidBST(tree) {
  if (!tree) {
    throw new Error('invalid tree');
  }
  return isValidBSTRecursive(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValidBSTRecursive(node, min, max) {
  if (node){
    if (node < min || node > max ){
      return false
    }
    else {
      isValidBSTRecursive(node.left, min, node.val - 1)
      isValidBSTRecursive(node.right, node, max)
    }
  }
  return true;
}
