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

    }

}