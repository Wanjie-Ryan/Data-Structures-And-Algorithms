// the size of the is fixed and a single block of memeory is used as if the first element is connected to the last element. Also referred to as circular buffer or ring buffer and follows the FIFO principle.
// A cicular queue will reuse the empty block created during the dequeue operation. When working with queues of fixed max size, a circular queue is a great implementation choice.
// supports 2 main ops: 1. Enqueue, 2. Dequeue.
// operations to implement:
// 1. enqueue(element) - add an element to the queue.
// 2. dequeue() - remove oldest element from the queue.
// 3. isFull() - check if the queue is full
// 4. isEmpty() - check if the queue is empty
// 5. peek() - get tje value of the element at the front of the queue without removing it.
// 6. size() - get the number of elements in the queue.
// 7. print() - visualize elements in the queue.

class CircularQueue {

    // capacity represents the max size of the circular queue. We use the capacity to create an array of fixed size.
    constructor(capacity){

        this.items = new Array(capacity)
        this.capacity = capacity // also store the capacity in a property
        this.currentLength = 0 /// keeps track of the number of items in the queue
        this.rear = -1
        this.front = -1 // we have two pointers to keep track of the front and the end of the queue, are both initialized to-1 and are not pointing to any position in the queue

    }

    isFull(){
        // if the length of the queue is equal to the capacity, then the queue is full
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    // the front and rear pointers are initialized to -1, and do not point to anywhere in the queue.
    enqueue(element){

        // check if the queue is full first
        if(!this.isFull()){
            // increment the rear pointer to point at index 0, then insert the element at the index 0
            this.rear = (this.rear +1) % this.capacity
            this.items[this.rear] = element
            this.currentLength +=1 // increment the current length value
            if(this.front === -1){
                this.front = this.rear
            }
        }

    }

    dequeue(){

        if(this.isEmpty()){
            return null
        }
        // the dequeue happens at the front of the queue
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -=1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item

    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        else{
            // start at the front pointer and travel to the rear pointer and print the elements, circle back to 0 after the last element
            let i
            let str = '' // str is used to store the elements in the queue
            for(i = this.front; i !== this.rear; i = (i+1)%this.capacity){


            }
        }
    }

}