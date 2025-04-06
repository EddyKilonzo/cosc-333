/**
 * Binary Search Algorithm
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1) (iterative approach)
 * 
 * @param {Array} arr - Sorted array to search
 * @param {Number} target - Value to find
 * @returns {Number} Index of target if found, -1 otherwise
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate middle index
        const mid = Math.floor((left + right) / 2);

        // Check if target is at mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater, ignore left half
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

console.log("Array:", sortedArray);
console.log(`Searching for ${target}...`);

const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}