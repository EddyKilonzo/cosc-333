class RedBlackTreeExample {
    static main() {
        // In JavaScript, we can use a Map to store key-value pairs
        // However, JavaScript doesn't have a built-in sorted dictionary
        // So we'll use an array and sort it to simulate the behavior
        const redBlackTree = new Map();
        
        // Add elements
        redBlackTree.set(5, "five");
        redBlackTree.set(3, "three");
        redBlackTree.set(7, "seven");
        redBlackTree.set(2, "two");
        redBlackTree.set(4, "four");
        redBlackTree.set(6, "six");
        redBlackTree.set(8, "eight");

        // Convert to array, sort by key, and iterate
        const sortedEntries = [...redBlackTree.entries()].sort((a, b) => a[0] - b[0]);
        
        for (const [key, value] of sortedEntries) {
            console.log(`Key: ${key}, Value: ${value}`);
        }
    }
}

// Run the example
RedBlackTreeExample.main();