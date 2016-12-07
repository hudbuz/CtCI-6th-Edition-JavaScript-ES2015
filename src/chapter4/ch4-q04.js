'use strict';

/**
 * This function attempts to check if the tree is completely balanced by finding
 * the shortest and longest paths from root to leaf. If the difference between
 * these two paths is greater than 1 then the tree is not balanced.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - space cost is due to call stack size while using
 * recursion, this may be O(N) in the worst case.
 */
export function isBalanced(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  var rootNode = tree.root
  var params = {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER
  }
  findDepth(params, rootNode, 0)
  return params.max - params.min <= 1
}

function findDepth(numberStore, node, depth){
  if (!node){
    if (numberStore.min > depth){
      numberStore.min = depth
    }
    if (numberStore.max < depth) {
      numberStore.max = depth
    }

  }
  else{
    findDepth(numberStore, node.left, depth +1)
    findDepth(numberStore, node.right, depth + 1)
  }
}
