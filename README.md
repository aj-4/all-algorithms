# Algorithms Overview

 ## Union Find
 ### Methods: 
 - Union: Join 2 graph nodes
 - Find: Are 2 nodes connected?
 - [Root]: (for quick algos) find root of connection tree
 
 Naive: O(n^2) 
 Brute force solution must recursively check each node

 ### Optimizations:
 - Quick Find: Store Ids in 'connections' subarray (N)
 - Quick Union: Use a Tree to join formed subarrays (N)
 - Weighted QU: Compare trees, put smaller below (Log N)
 - Path Compression: Set tree merges to point at root (Log* N)

 ## Stack / Queue
 - Can be implemented with Linked List OR Array
 - O(1) add and remove / O(n) iteration
 - Iterate with *[Symbol.iterator]

## Sorting
### Merge Sort
- Guaranteed O(n log n) 
- Split Recursively until array length 1, build up by merging
- Stable sort (retains position on multiple key sorts)
#### Bottom-Up Merge Sort
- Iterative approach: Two for loops, second is n * 2 intervals
- Compare in place by twos, fours, etc until merged

### Quick Sort
- Shuffle, partition from pivot, recurse left, recurse right
- Avg O(1.3n log n) - faster than merge sort
- Worst case is O(n^2) - when already sorted
- Not stable

