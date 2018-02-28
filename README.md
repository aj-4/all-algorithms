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

## Priority Queues
### Binary Heap
- Starts at index 1
- Max: O(n)
- Del Max: O(log n) Swap with end, pop, and sink down
- Add: O(log n) Push to end and bubble up

### Heap Sort
- In place with O(n log n) worst case
- No use of cache memory
- Not stable

## Elementary Symbol Tables
### Symbol Table
- (Key, Value) Like an object, but ordered
- Implemented with 2 sorted arrays (one keys, one values)

- Retrieve in O(log n) with binary search 
- Insert O(n) - major flaw

### Binary Search Tree
- A binary tree in symmetric order (left smaller, right larger)
- Search / insert average case O(log n) / worst case O(n)
- Pre order / In order / Post order traversals

- Removal options: tombstone (leave key, rm value) 
- Or: Hibbard Deletion (replace with right's lesser child) - leads to asymmetrical O(sqrt(n)) operations tree

- Validate recursively with min/max