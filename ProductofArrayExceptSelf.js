/*
    Given an integer array nums, return an array answer such that answer[i] 
    is equal to the product of all the elements of nums except nums[i].
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    You must write an algorithm that runs in O(n) time and without using the division operation.

    Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

*/


var productExceptSelf1 = function(nums) {
    let prevCount = 1;
    let req = []
    for(let i = 0;i<nums.length;i++){
      let total = 1;
        for(let j = i+1;j<nums.length;j++){
            total *= nums[j]
        }
        req[i] = total * prevCount
        prevCount *= nums[i]
    }

    return req
}([1,2,3,4])

console.log(productExceptSelf1)

/*
    tracking previous values product in one variable and multiplying that varirable with the product of after variables leaving current variable.

*/


// we can also do this like using two normal loops instead of nested loops.

var productExceptSelf2 = function(nums) {
    let leftProduct = 1;
    let rightProduct = 1;

    let req = []
    for(let i = 0;i<nums.length;i++){
      req[i] = leftProduct;
      leftProduct *= nums[i]
    }

    for(let i = nums.length-1;i >=0;i--){
        req[i] *= rightProduct;
        rightProduct *= nums[i]
    }

    return req
}([1,2,3,4])

console.log(productExceptSelf2)

/*
    we will save the left products of the index variables in the res[i] by iterating from the beginning.
    and we will be multiplying the res[i] with right products which we can get same by iterating from the back
*/