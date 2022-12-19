/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

*/

var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])]
        }else{
            map.set(nums[i],i)
        }
    }
}([2,7,11,15],9);

console.log(twoSum)

/*
    We need to find 2 numbers a, b so that a + b = target.
    We need a HashMap datastructure to store elements in the past, let name it seen.
    The idea is that we iterate b as each element in nums, we check if we found a (where a = target - b) in the past.
    If a exists in seen then we already found 2 numbers a and b, so that a + b = target, just output their indices.
    Else add b to the seen.
*/