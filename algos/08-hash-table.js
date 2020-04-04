/*
Hash Table Implementation
 */

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

