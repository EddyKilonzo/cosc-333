function dijkstrasAlgorithm(graph, startNode) {
  const distances = {};
  const visited = {};
  const previous = {};
  const priorityQueue = [];

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Add start node to priority queue
  priorityQueue.push([startNode, 0]); // [node, distance]
  priorityQueue.sort((a, b) => a[1] - b[1]);

  while (priorityQueue.length > 0) {
    const [currentNode, currentDistance] = priorityQueue.shift();

    if (visited[currentNode]) {
      continue;
    }
    visited[currentNode] = true;

    if (currentDistance > distances[currentNode]) {
      continue;
    }

    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
        priorityQueue.push([neighbor, distance]);
        priorityQueue.sort((a, b) => a[1] - b[1]);
      }
    }
  }

  return { distances, previous };
}

// Example graph representation (adjacency list with weights)
const graph = {
  'A': { 'B': 7, 'C': 8 },
  'B': { 'A': 7, 'D': 5 },
  'C': { 'A': 8, 'D': 2, 'E': 4 },
  'D': { 'B': 5, 'C': 2, 'E': 9, 'F': 4 },
  'E': { 'C': 4, 'D': 9, 'F': 6 },
  'F': { 'D': 4, 'E': 6 },
};

const startNode = 'A';
const result = dijkstrasAlgorithm(graph, startNode);

console.log("Shortest distances from", startNode + ":", result.distances);
console.log("Previous nodes in shortest path:", result.previous);

// To reconstruct the shortest path to a specific node (e.g., 'F'):
function reconstructPath(previous, endNode) {
  const path = [];
  let current = endNode;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}

const endNode = 'F';
const shortestPath = reconstructPath(result.previous, endNode);
console.log(`Shortest path from ${startNode} to ${endNode}:`, shortestPath);
/*
Output:
Shortest distances from A: { A: 0, B: 7, C: 8, D: 10, E: 12, F: 14 }
Previous nodes in shortest path: { B: 'A', C: 'A', D: 'C', E: 'C', F: 'D' }
Shortest path from A to F: [ 'A', 'C', 'D', 'F' ]
*/