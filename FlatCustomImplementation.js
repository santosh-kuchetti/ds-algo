let arr = [1, 2, 3, 4, [5, 6, [7, 8, 9]], 10, 11];
/*
    function req(arr) {
        let stack = [...arr]

        while (stack.length) {
            let last = stack.pop()
            if (Array.isArray(last)) {
                stack.push(...last)
            } else {
                reqArray.push(last)
            }
        }
        return reqArray.reverse()
    }

    our flat function should do above functionality.

*/
let reqArray = []
Array.prototype.myFlat = function () {
    function req(arr) {
        let stack = [...arr]

        while (stack.length) {
            let last = stack.pop()
            if (Array.isArray(last)) {
                stack.push(...last)
            } else {
                reqArray.push(last)
            }
        }
        return reqArray.reverse()
    }
    return req(this)   // we should call the function, in order to execute. otherwise it win't be called.
    
}

console.log(arr.myFlat())
    





