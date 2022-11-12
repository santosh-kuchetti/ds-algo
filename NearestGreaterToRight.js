//This can be also be asked as Next Largest Element

/*
    Input:-  [1,3,0,0,2,4]
    output:- [3,4,2,2,,4,-1]

    if no greater points are there in right, we can return -1.
*/
let arr = [1, 3, 0, 0, 2, 4];
var nearest = (arr) => {
    let stack = [];
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--){
        if (stack.length == 0) {
            res.push(-1);
        }
        else if(stack.length > 0 && stack.slice(-1) > arr[i]){
            res.push(stack[arr.length -1])
        }
        else if (stack.length > 0 && stack.slice(-1) < arr[i]) {
            while (stack.length > 0 && stack.slice(-1) <= arr[i]) {
                stack.pop()
            }
            if (stack.length == 0) {
                res.push(-1);
            }
            else {
                res.push(stack[arr.length - 1])
            }
        }
        stack.push(arr[i])
    }
    return res.reverse();
}
console.log(nearest(arr))