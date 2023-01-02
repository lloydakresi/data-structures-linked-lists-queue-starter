const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let node = new SinglyLinkedNode(val);
        if (!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this.length;


        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head) return null;
        let removed = this.head.value;

        if(this.length > 1){
            this.head = this.head.next;
        }else{
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return removed;


        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
