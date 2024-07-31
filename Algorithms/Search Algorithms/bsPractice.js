function binarysearchPrac(n){

    let low = 0;
    let high = n.length -1

    while(low<high){

        let mid = Math.floor((low + high) / 2)

        if(n==mid){
            return mid;

        }
        else if(n<mid){
            high = mid -1;
        }
        else if(n>mid){
            high = mid + 1;
        }
        

    }




}

console.log(binarysearchPrac([1,2,3,4,5,7,9,10]))