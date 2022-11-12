const arr = [1, 2, 3, [4, 5,[4,5,6]],[6,7,8],[9,10]];

/*
    recursive solution

    we check on each element, if the element is not the array, we will add into the empty array
    otherwise we will call the same function by passing the element that is array.

    recusive nature automatically calls when the element is array and it will continues.
*/

let array = []
let req = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (!Array.isArray (arr[i])) {
            array.push(arr[i])
        } else {
            req(arr[i])
        }
    }
    return array
}

console.log(req(arr))

/*
    iterative solution

    let understand with simple example
    arr = [1,2,3,[4,5],6].

    empty = []
    lets pop the array and check if the element is not array, we will push element into empty array,
    otherwise if the element is array, we will push the element which is array by spreading into the arr.

    step 1: pop 6, it's not array, so push into empty arry, empty = [6]
    step 2: pop [4,5], its array so spread it into the arr. so arr = [1,2,3,4,5]
    step 3: pop 5, it's not array, so push into empty arry, empty = [6,5]
    step 3: pop 4, it's not array, so push into empty arry, empty = [6,5,4]
    step 3: pop 3, it's not array, so push into empty arry, empty = [6,5,4,3]
    step 3: pop 2, it's not array, so push into empty arry, empty = [6,5,4,3,2]
    step 3: pop 1, it's not array, so push into empty arry, empty = [6,5,4,3,2,1]
    
    we will reverse the empty array and that our answer [1,2,3,4,5,6]

*/
let array1 = []
let req1 = (arr) => {
    
    while (arr.length) {
        let doop = arr.pop();
        if (!Array.isArray(doop)) {
            array1.push(doop)
        } else {
            arr.push(...doop)
        }
    }
    return array1.reverse()
}

console.log(req1(arr))