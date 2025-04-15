function fibTabulation(n) {
  if (n <= 1) {
    return n;
  }
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log("Fibonacci (Tabulation) of 10:", fibTabulation(10)); // Output: 55