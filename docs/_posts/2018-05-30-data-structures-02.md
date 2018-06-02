---
layout: post
title:  "Data Structures - Part 02: Stacks and Queues"
date:   2018-05-30
categories: DS
---

### Reference: 

Coursera's Algorithms, [Part I](https://www.coursera.org/learn/algorithms-part1) and [Part II](https://www.coursera.org/learn/algorithms-part2) by Robert Sedgewick and Kevin Wayen

### Stacks


```angular2html
function LLNode(key) {
  this.key = key;
  this.link = null;
}


function Stack() {
    this.head;
    this.size = 0;
    this.push = function(key) {
        if(this.isEmpty()) {
            this.head = new LLNode(key);
        } else {
            let temp = this.head;
            this.head = new LLNode(key);
            this.head.link = temp;
        }
        this.size++;
    };
    this.pop = function() {
        if(this.isEmpty()) {
            return null;
        } else {
            key = this.head.key;
            this.head = this.head.link;
            this.size--;
            return key;
        }
    };
    this.isEmpty = function() {
        if(this.size)
            return false;
        else
            return true;
    };
    this.getSize = function() {
        return this.size;
    };
    this.print = function() {
        let keys = [];
        let link = this.head;
        while(link) {
            keys.push(link.key);
            link = link.link;
        }
        console.log(keys);
    }
};

s = new Stack();
console.log("isempty ", s.isEmpty());
s.push(5); console.log("push 5 ");
s.print();
console.log("pop ", s.pop());
s.print();
console.log("pop ", s.pop());
s.print();
s.push(0); console.log("push 0 ");
s.print();
s.push("A"); console.log("push A ");
s.print();
s.push(-1); console.log("push -1 ");
s.print();
console.log("pop ", s.pop());
s.print();
console.log("isempty ", s.isEmpty());
s.push(-5); console.log("push -5 ");
s.print();
console.log("pop ", s.pop());
s.print();
s.print();
console.log("size ", s.getSize());


```
    