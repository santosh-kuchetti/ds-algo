// let arr = [1, 2, 3, 4]
// let req = arr.reduce((acc, curr) => acc + curr)
// console.log(req)
let arr = [1,2,3,4]
Array.prototype.red = function (callback, curr) {
    const arr = this;
    let acc = curr != null ? curr : arr[0];
    for (let i = 1; i < arr.length; i++){
        acc = callback(acc,arr[i])
    }
    return acc
}

let req = arr.red((acc, curr) => acc * curr)

console.log(req)