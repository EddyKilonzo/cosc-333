class DisjointSet {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(i) {
    if (this.parent[i] === i) {
      return i;
    }
    return this.parent[i] = this.find(this.parent[i]); // Path compression
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI !== rootJ) {
      if (this.rank[rootI] < this.rank[rootJ]) {
        this.parent[rootI] = rootJ;
      } else if (this.rank[rootI] > this.rank[rootJ]) {
        this.parent[rootJ] = rootI;
      } else {
        this.parent[rootJ] = rootI;
        this.rank[rootI]++;
      }
      return true;
    }
    return false;
  }
}

function kruskalsAlgorithm(edges, numVertices) {
  edges.sort((a, b) => a[2] - b[2]); // Sort edges by weight in ascending order
  const mst = [];
  const disjointSet = new DisjointSet(numVertices);
  let mstWeight = 0;

  for (const edge of edges) {
    const [u, v, weight] = edge;
    if (disjointSet.union(u, v)) {
      mst.push(edge);
      mstWeight += weight;
    }
  }

  return { mst, weight: mstWeight };
}

// Example usage:
const edges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];
const numVertices = 4;

const result = kruskalsAlgorithm(edges, numVertices);
console.log("Minimum Spanning Tree:", result.mst);
console.log("Total weight of MST:", result.weight);
/*
Output:
Minimum Spanning Tree: [ [ 2, 3, 4 ], [ 0, 3, 5 ], [ 0, 1, 10 ] ]
Total weight of MST: 19
*/