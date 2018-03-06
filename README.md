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
- Max: O(1)
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

### Set
- A collection of unique keys 
- Can be used for exception filters blacklisting / whitelisting

### Binary Search Tree
- A binary tree in symmetric order (left smaller, right larger)
- Search / insert average case O(log n) / worst case O(n)
- Pre order / In order / Post order traversals

- Removal options: tombstone (leave key, rm value) 
- Or: Hibbard Deletion (replace with right's lesser child) - leads to asymmetrical O(sqrt(n)) operations tree

- Validate recursively with min/max

## Balanced Search Trees
- Guaranteed O(log n)
### 2-3 Search Trees
- Each node 1 key (2 child) / 2 key (3c) => if 3 key, new parent
### Red-Black Trees
- 2-3 trees, 2 key trees represented as red path

- Default red path on insertion, then adjustment, rules:
- Red path must lean left, only 1 red path per node

- To follow rules, perform operations:
- Flip colors, rotate left, rotate right

## Hash Tables
- Best for short keys, unordered values
### Hashing Function
- Hashing functions should give all indices equally
- One way is Horner's method (character * 31) % 2
- Birthday problem: Collisions are inevitable
- Coupon Collector / Load Balancing: Evenly distributed

### Separate Chaining
- Dealing with Collisions using a LinkedList
- Constant time lookup avg, worst case linear

### Linear Probing
- 'Open addressing' using array, try next (i + 1) if full
- Forms clusters that must searched on retrieval, kept small
- Can be prevented by 'Two probe' or 'Double hashing'

## Undirected Graphs
- Use 'marked' and 'edgeto' properties to search
### DFS
DFS: Maze Exploration of possible paths - recursion or stack
- Connected Components - Are 2 components in connected subgraph?
### BFS
BFS: Branching search - queue
- find path between 2 nodes
### Challenges
- Bipartite Graph: Is every (red) connected to only (blacks) O(n)
- Eulerian Cycle: Traverse every edge exactly once O(n)
- Hamiltonian Cycle: Visit each vertex exactly once (intractable)
- Graph isomorphism: Are 2 graphs identical despite vertex names? (unknown)
- No overlap layout: Extremely complex but O(n)

## Directed Graphs (dirGraphs)
Vertex has indegree (arrows in) and outdegree (arrows out)
- Program flow is always a digraph
- Garbage collection is a digraph of pointers
### DFS + BFS
- DFS code same as undirected (marked, edgeTo, arrays)
- BFS code same as undirected (marked, edgeTo, distTo arrays)
- Web crawler (BFS)
### Topological Sort
- How can you schedule tasks with precedence constraints?
- Draw DAG (directed acyclic graph) so all the edges point up
- Solve with DFS (create reverse postOrder stack)
### Strong(ly Connected) Components
- Points directed at each other - can be through other points
- Works similar to connected component subarrays
##### Kosaraju-Sharir Algorithm
Used to find all strongly connected components
- FIRST topological sort => on reverse() version of graph
- THEN iterate normal graph in order of rev pOs - group DAG kernel

## Minimum Spanning Trees
Definition: Shortest way to connect *edge weighted graph* - acyclic
### Greedy Algorithm
Cut: A partition of the graph into two non-empty sets
Crossing edge: connects a vertex in one set to one in the other
- Continually cut, find minimum edge (black) until no more cuts w/o black
- While (vertex count - 1 black edges), continue cutting
- Graph not connected? Minimum spanning forest
##### Kruskal's Algorithm
Sort edges by shortest first, keep adding until there's a cycle
- Use queue, min heap, union find
- Repeat until (V - 1) edges
- worst O(n log n)
##### Prim's Algorithm
Start with vertex 0, add min weight edge to MST -> (a queue)
- Re evaluate min weight edge which connects to the tree
- Use priority queue (min heap) to hold all edges (Lazy solution)
- Repeat until (V - 1) edges
- (Eager) - What is the best way to get to the tree, considering current edges? (Need INDEXED priority queue)

## Shortest Paths
For *edge weighted digraphs* - how do we get from one vertex to every other vertex?
- Iterate through weighted edges branching from origin, in increasing length
#### Dijkstra's Algorithm
Computes a SPT (Shortest Path) in any edge weighted digraph with non-negative weights
- Relaxing paths always decreases length
- Use Indexed PQ (with decrease keys) -> makes an asymptotic difference with fibonacci heap