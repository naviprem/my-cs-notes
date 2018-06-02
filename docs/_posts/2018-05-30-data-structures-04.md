---
layout: post
title:  "Data Structures - Part 04: Trees"
date:   2018-05-30
categories: DS
---

### Reference: 

Coursera's Algorithms, [Part I](https://www.coursera.org/learn/algorithms-part1) and [Part II](https://www.coursera.org/learn/algorithms-part2) by Robert Sedgewick and Kevin Wayen

### Trees

* Tree data structures are used mainly to implement symbol tables because they provide efficient searches
* Red-Black trees provide logN implementations for search, insert and delete in both worst and average cases



### Binary Search Tree

```
function Node(key) {
  this.key = key;
  this.lChild = null;
  this.rChild = null;
}

function BinaryTree() {
    this.root = null;
    this.isEmpty = function() {
        return !this.root;
    };
    this.insert = function(key) {
        let rInsert = function(root, key) {
            if(!root) {
                return new Node(key);
            } else if(root.key > key) {
                root.lChild = rInsert(root.lChild, key);
            } else if(root.key < key) {
                root.rChild = rInsert(root.rChild, key);
            } else {
                root.key = key;
            }
            return root;
        };
        this.root = rInsert(this.root, key);
    };
    this.delete = function(key) {
        //TODO: implement delete
    };
    this.inOrderTraversal = function() {
        let nodes = [];
        let traverse = function(root) {
            if(root) {
                traverse(root.lChild);
                nodes.push(root.key);
                traverse(root.rChild);
            }
        };
        traverse(this.root);
        console.log(nodes);
    };
    this.search = function(key) {
      let rSearch = function(root, key){
          if(!root) {
              return null;
          } else if(root.key > key) {
              return rSearch(root.lChild, key);
          } else if(root.key < key) {
              return rSearch(root.rChild, key);
          } else {
              return root;
          }
      };
      let node = rSearch(this.root, key);
      if(node) console.log("found", node.key);
      else console.log(key, "not found");
    };
}

let bt = new BinaryTree();
bt.insert(3); console.log("insert 3");
bt.insert(5); console.log("insert 5");
bt.insert(6); console.log("insert 6");
bt.insert(1); console.log("insert 1");
bt.inOrderTraversal();
bt.search(5);
bt.search(7);

```

    