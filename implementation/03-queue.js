const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this.length
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this.length
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(this.head){
            let removedNode = this.head
            let newHeadNode = removedNode.next
            if(!newHeadNode) this.tail = null
            this.head = newHeadNode
            this.length--
            return removedNode.value
        }
        return null
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
