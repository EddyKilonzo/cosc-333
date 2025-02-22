//Factorial Calculation

// Function to calculate the factorial of a number using recursion
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Measure runtime for factorial calculation
let startTimeFactorial = performance.now(); // Start timing
let resultFactorial = factorial(10); // Calculate factorial of 10 (you can change this number)
let endTimeFactorial = performance.now(); // End timing

// Output the result and runtime
console.log(`Factorial of 10 is: ${resultFactorial}`);
console.log(`Runtime for factorial calculation: ${(endTimeFactorial - startTimeFactorial).toFixed(4)} milliseconds`);


