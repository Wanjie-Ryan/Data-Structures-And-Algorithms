// should move the entire stack to the last rod, whilst obeying the rules:
// 1. Only one disk maybe moved at a time.
// 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod
// 3. No disk may be placed on top of a smaller disk.
// shift n-1 disks from A to B using C when required
// shift last disk from A to C
// Shift n-1 disk from B to C

function Hanoi(n, fromRod, toRod, usingRod){

    if(n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    Hanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

    Hanoi(n-1, usingRod, toRod, fromRod)

}

//number of disks is 3, and we want to shift the disks from A to C using B
Hanoi(3, 'A', 'C', 'B')

// complexity - O(2^n)
