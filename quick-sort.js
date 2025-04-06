/**
 * Quick Sort Algorithm
 * 
 * Time Complexity:
 * - Best/Average Case: O(n log n)
 * - Worst Case: O(n²) (when array is already sorted and poor pivot is chosen)
 * Space Complexity: O(log n) (due to recursion stack)
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, left, right);
        
        // Recursively sort the subarrays
        quickSort(arr, left, pivotIndex - 1);  // Sort elements before pivot
        quickSort(arr, pivotIndex + 1, right); // Sort elements after pivot
    }
    return arr;
}

function partition(arr, left, right) {
    // Choose the rightmost element as pivot
    const pivotValue = arr[right];
    let partitionIndex = left;
    
    for (let i = left; i < right; i++) {
        // If current element is smaller than the pivot
        if (arr[i] < pivotValue) {
            // Swap elements and move partition index
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
            partitionIndex++;
        }
    }
    
    // Swap the pivot element with the element at partition index
    [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]];
    
    return partitionIndex;
}

// Example Usage
const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = quickSort([...unsortedArray]); // Use spread to avoid mutating original
console.log("Sorted Array:", sortedArray);