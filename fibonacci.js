//Fibonacci Sequence Calculation

// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
    // Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
    if (n <= 1) {
        return n;
    }
    // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Measure runtime for Fibonacci calculation
let startTimeFibonacci = performance.now(); // Start timing
let resultFibonacci = fibonacci(10); // Calculate the 10th Fibonacci number (you can change this number)
let endTimeFibonacci = performance.now(); // End timing

// Output the result and runtime
console.log(`Fibonacci number at position 10 is: ${resultFibonacci}`);
console.log(`Runtime for Fibonacci calculation: ${(endTimeFibonacci - startTimeFibonacci).toFixed(4)} milliseconds`);