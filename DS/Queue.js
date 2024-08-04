// follows the principle of First in first out (FIFO).............. Queue of people in a line
// Queue data structure supports two main ops: 1. Enqueue - adds an element at the tail of the collection. 2. Dequeue - removes an element from the head of the collection.
// apart from enqueue and dequeue, there is also 1. Peek - gets the value of element at the front of the queue without removing it. 2. isEmpty - checks if the queue is empty. 3. size - gets the number of elements in the queue. 4. print - visualize the elements in the queue.
// shift - removes the first element from an array and returns the element
// unshift - adds a new element at the beginning of the array and return the new length of the array.
// pop - removes the last element of the array and returns the element
// push - adds an element at the end of the array and returns the length of the array

class Queue{

    // create a constructor to intialize a new list

    constructor(){
        this.Queue = []
    }

    // implementing method enqueue that adds an element to the end of the queue using the push method

    enqueue(element){
        this.Queue.push(element)
    }

    dequeue(){
        return this.Queue.shift()
    }

    isEmpty(){
        return this.Queue.length === 0
    }

    peek(){
        // if the Queue is not empty then it will return the first element of the queue 
        if(!this.isEmpty()){
            return this.Queue[0]
        }
        return null
    }
    size(){
        return this.Queue.length
    }

    print(){
        console.log(this.Queue.toString())
    }

}

// creating a new instance of the Queue

const queue = new Queue
console.log(queue.isEmpty()) 
queue.enqueue(20)
queue.enqueue(40)
queue.enqueue(10)
queue.enqueue(60)
queue.enqueue(80)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())