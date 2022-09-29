/*
    Given an array nums containing n distinct numbers in the range [0, n],
    return the only number in the range that is missing from the array.

    Output: 8
    Explanation: n = 9 since there are 9 numbers,
    so all numbers are in the range [0,9].
    8 is the missing number in the range since it does not appear in nums.
*/
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
var missingNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(i)) {
            continue;
        } else {
            return i;
        }
    }
}(nums);
console.log(missingNumber)
