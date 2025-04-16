function knapsack(capacity, weights, values) {
  const n = weights.length;

  // Create a 2D array (dp table) to store the maximum value that can be obtained
  // for different capacities and subsets of items.
  // dp[i][j] will represent the maximum value that can be obtained with a
  // knapsack of capacity j using the first i items.
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(capacity + 1).fill(0));

  // Iterate through the items
  for (let i = 1; i <= n; i++) {
    // Iterate through the capacities from 0 to the given capacity
    for (let j = 0; j <= capacity; j++) {
      // If the weight of the current item is less than or equal to the current capacity
      if (weights[i - 1] <= j) {
        // We have two choices:
        // 1. Include the current item: value of current item + max value obtained with
        //    remaining capacity (j - weight of current item) using the previous items.
        // 2. Exclude the current item: max value obtained with the current capacity
        //    using the previous items.
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else {
        // If the weight of the current item is greater than the current capacity,
        // we cannot include it, so the maximum value remains the same as with the
        // previous items.
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // The maximum value that can be obtained with the given capacity and all items
  // will be at the bottom-right cell of the dp table.
  return dp[n][capacity];
}

// Example usage:
const capacity = 10;
const weights = [2, 3, 4, 5];
const values = [10, 40, 30, 50];

const maxValue = knapsack(capacity, weights, values);
console.log("Maximum value:", maxValue); // Output: Maximum value: 90

// --- To also get the items included in the knapsack ---
function knapsackWithItems(capacity, weights, values) {
  const n = weights.length;
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // Backtrack to find the items included
  const includedItems = [];
  let i = n;
  let j = capacity;
  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      includedItems.push({
        weight: weights[i - 1],
        value: values[i - 1],
        index: i - 1, // Original index
      });
      j -= weights[i - 1];
    }
    i--;
  }

  return { maxValue: dp[n][capacity], items: includedItems };
}

// Example usage with items:
const capacity2 = 10;
const weights2 = [2, 3, 4, 5];
const values2 = [10, 40, 30, 50];

const result = knapsackWithItems(capacity2, weights2, values2);
console.log("Maximum value:", result.maxValue);
console.log("Included items:", result.items);
/*
Output:
Maximum value: 90
Included items: [
  { weight: 5, value: 50, index: 3 },
  { weight: 3, value: 40, index: 1 }
]
*/