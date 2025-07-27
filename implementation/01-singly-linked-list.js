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
        let newNode = new SinglyLinkedNode(val)
        let secondNode = this.head

        newNode.next = secondNode
        this.head = newNode
        this.length++

        return {
            head: newNode,
            length: this.length
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //this function will take O(n) 

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        let secondToLastNode = this.head

        if (!secondToLastNode) {
            this.head = newNode;
            this.length++
            return {
                head: newNode,
                length: this.length
            }
        }

        while (secondToLastNode.next) {
            secondToLastNode = secondToLastNode.next;
        }
        secondToLastNode.next = newNode;
        this.length++
        return {
            head: secondToLastNode,
            length: this.length
        }
    }

    removeFromHead() {
        // Remove node at head
        let head = this.head
        if(head){
        this.head = this.head.next
        this.length--
        return head
    }
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        let lastNode = this.head

        if(!lastNode) return

        if (!lastNode.next) {
            this.head = null
            this.length--
            return lastNode
        }

        let curr = this.head
        while (curr.next.next) {
            curr = curr.next
        }
        lastNode = curr.next
        curr.next = null
        this.length--
        return lastNode
        // Write your hypothesis on the time complexity of this method here
        // it has a time complexity of O(n)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) return this.head.value

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if(!this.head) return
        
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
        console.log('NULL')

        // Write your hypothesis on the time complexity of this method here
        //Transversing through the list is a time complexity of O(n)
    }

}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
