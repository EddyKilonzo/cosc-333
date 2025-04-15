function fibMemoization(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  return memo[n];
}

console.log("Fibonacci (Memoization) of 10:", fibMemoization(10)); // Output: 55