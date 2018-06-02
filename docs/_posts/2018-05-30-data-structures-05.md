---
layout: post
title:  "Data Structures - Part 05: Hash Table"
date:   2018-05-30
categories: DS
---

### Reference: 

Coursera's Algorithms, [Part I](https://www.coursera.org/learn/algorithms-part1) and [Part II](https://www.coursera.org/learn/algorithms-part2) by Robert Sedgewick and Kevin Wayen

### Hash Table

* Involves saving items in a key indexed table
* Index is a function of Key
* `Collition resolution:` Algorithm and Data Structure to handle 2 keys that hash to the same index

### Classic space time trade off
* `When no space limit:` Simply use the key as index without any hashing
* `When no time limit:` Simply store in ordered array with search O(logN) and insertion O(N)
* `when both space and time is limitied:` As in real world, use hashing

### Implementing a hash function
* Custom implementation for different data types
* Hash function returns 32 bit integer. This integer will have to be scaled down to match the size of the hash table
* Horners'method is used to compute hash for strings. `hash = s[i] + 31 * hash`

### Separate Chaining
* How to handle when collision happens, 2 keys have same index.

```angular2html
function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}

function HashTable(size) {
    this.size = size || 10;
    this.table = [];
    this.hash = function(key) {
        return key % this.size;
    };

    this.put = function(key, value) {
        let hash = this.hash(key);
        let node = this.table[hash];
        let prev = null;
        if(!node) {
            console.log("Added", key, value);
            this.table[hash] = new Node(key, value)
        } else {
            while(node) {
                if(node.key === key) {
                    node.value = value;
                    console.log("Updated", key, value);
                    return;
                }
                prev = node;
                node = node.next;
            }
            console.log("Added", key, value);
            prev.next = new Node(key, value);
        }
    };

    this.delete = function(key) {
        let hash = this.hash(key);
        let node = this.table[hash];
        let prev = null;
        while(node) {
            if(node.key === key) {
                if(prev) {
                    prev.next = node.next;
                    console.log("Found and deleted", key, node.value);
                    node = null;
                    return;
                } else {
                    console.log("Found and deleted", key, node.value);
                    this.table[hash] = node.next;
                    return;
                }
            }
            prev = node;
            node = node.next;
        }
        console.log("Not Found for deletion", key);
        return null;
    };

    this.get = function(key) {
        let hash = this.hash(key);
        let node = this.table[hash];
        while(node) {
            if(node.key === key) {
                console.log("Found", key, node.value);
                return node.value;
            }
            node = node.next;
        }
        console.log("Not Found", key);
        return null;
    };
}

let ht = new HashTable(10);
ht.put(21, "Apple");
ht.put(32, "lilly");
ht.put(52, "summer");
ht.put(62, "avacado");
ht.get(32);
ht.get(52);
ht.get(42);
ht.delete(52);
ht.delete(32);
ht.get(62);
ht.delete(21);

```