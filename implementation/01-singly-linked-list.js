// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);

        if (!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        //possiby O(1) since only the first node is needed. hence same runtime regardless of the size of the input
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;

        return this;

    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;




        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return;
        let current = this.head;
        let removed;

        while(current.next){

            if(!current.next.next){
                removed = current.next;
                current.next = null;
                this.length--;
                return removed;
            }

            current = current.next;
        }

        removed = this.head;
        this.head = null;
        this.length--;
        return removed;




        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.head === null) return undefined;
        let val = this.head.value;
        return val;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
