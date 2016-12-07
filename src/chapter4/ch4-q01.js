'use strict';

/**
 * One way to check if two nodes are connected is to do a BFS of the graph
 * from the source node. BFS would be useful where the nodes have many out
 * edges (degrees) and paths between pairs are not exceedingly deep as it will
 * visit neighbours from the source node radiating outwards.
 *
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional space: O(N)
 */
export function isConnectedBFS(graph, source, target) {
  searched = {}
  if (source === target) {
    return true
  }
  queue = []
  queue.push(source)
  while (!queue.isEmpty()){
  u = queue.shift();
  if (u !== undefined){
    for (var i = 0; i < u.vertices; i ++){
      if (searched[u.vertices[i]] !== 'seen'){
        if (u.vertices[i] === target){
          return true
        }
        else{
          searched[u.vertices[i]] === 'seen'
          queue.push(u.vertices[i])
        }
      }
    }
  }

}
  return false;
}

/**
 * One way to check if two nodes are connected is to do a DFS of the graph
 * from the source node. DFS would be useful where the graph has really long
 * paths and we want to travel as far as we can through that graph as quickly as
 * possible. DFS can be recursive or use a stack and iteration.
 *
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional space: O(N)
 */
export function isConnectedDFS(graph, source, target) {
  return dfs(graph, new Set(), source, target);
}

function dfs(graph, discovered, source, target) {

  if (source === target) {
    return true;
  }
  console.log(graph)
  discovered.add(source);
  for (let neighbour of graph[source]) {
    if (!discovered.has(neighbour)) {
      if (dfs(graph, discovered, neighbour, target)) {
        return true;
      }
    }
  }
  return false;
}
