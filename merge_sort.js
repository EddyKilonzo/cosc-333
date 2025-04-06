/**
 * Merge Sort Algorithm Implementation in JavaScript
 * 
 * Merge Sort is a divide-and-conquer algorithm that works by:
 * 1. Dividing the unsorted list into n sublists, each containing one element
 * 2. Repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining
 * 
 * Time Complexity: O(n log n) in all cases
 * Space Complexity: O(n) - requires temporary arrays
 */

/**
 * Merges two sorted arrays into one sorted array
 * @param {Array} left - First sorted array
 * @param {Array} right - Second sorted array
 * @returns {Array} Merged sorted array
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and push the smaller one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatenate any remaining elements from left array
    // (in case right array was exhausted first)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Concatenate any remaining elements from right array
    // (in case left array was exhausted first)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

/**
 * Recursive Merge Sort function
 * @param {Array} arr - Array to be sorted
 * @returns {Array} Sorted array
 */
function mergeSort(arr) {
    // Base case: array with 0 or 1 element is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Find the middle point to divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    
    // Split the array into left and right halves
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    // Recursively sort both halves and then merge them
    return merge(
        mergeSort(left),   // Sort the left half
        mergeSort(right)   // Sort the right half
    );
}

// Example usage:
const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log("Unsorted array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array:", sortedArray);