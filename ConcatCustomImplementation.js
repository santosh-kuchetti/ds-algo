
const arr = [1, 2, 3];
const arr1 = ['1', '2', '3'];
const arr2 = null;
const arr3 = undefined


let req = [];
Array.prototype.myConcat = function () {
    let args = arguments;    // arguments will get the argumnets that are passed to the function in the form of object. { '0': [ '1', '2', '3' ], '1': null, '2': undefined }
    const arr = this;        // this here gives the array that we are concating with
    for (let i = 0; i < arr.length; i++){      // we are first pushing the array we are concating with
        req.push(arr[i])
    }
    for ( i in args) {                       // looping over the object that we are getting from the arguments, and checking the type of the keys and pushing those values into the array so that we can get whole concatinating array finally.
        if (Array.isArray(args[i])) {       // checking if the object key value type is array, we will spread the array into the req array
            req.push(...args[i])
        } else {
            req.push(args[i])                // if the type of key value is not the array, we just push it into the req. 
        }
    }

    return req;                            // finally returning the cocatinated array that's what we require.
}

const doop = arr.myConcat(arr1, arr2, arr3)            // our function
const doop1 = arr.concat(arr1, arr2, arr3)             // actual function
