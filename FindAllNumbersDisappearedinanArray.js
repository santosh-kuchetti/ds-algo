/*
    Given an array nums of n integers where nums[i] is in the range [1, n],
     return an array of all the integers in the range [1, n] that do not appear in nums.

    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [5,6]
*/

let nums = [4, 3, 2, 7, 8, 2, 3, 1]

var findDisappearedNumbers = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = i + 1;
    }
    for (let i of nums) {
        arr[i - 1] = -1
    }
    return arr.filter(i => i > 0)
}(nums);
console.log(findDisappearedNumbers);