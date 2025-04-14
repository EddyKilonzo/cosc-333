function minCoins(coins, amount) {
  // Sort coins in descending order
  coins.sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      count++;
    }
  }

  return count;
}

function main() {
  const coins = [1, 2, 5, 10, 20, 50];
  const amount = 93;
  const result = minCoins(coins, amount);
  console.log(`Minimum coins needed: ${result}`);
}

main();
