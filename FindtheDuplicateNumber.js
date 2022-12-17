/*
    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
    There is only one repeated number in nums, return this repeated number.
    You must solve the problem without modifying the array nums and uses only constant extra space.

    Example 1:

    Input: nums = [1,3,4,2,2]
    Output: 2
*/

var findDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }

    for([k,i] of map){
        if(map.get(k) > 1){
            return k
        }
    }
}([1,3,4,2,2]);

console.log(findDuplicate);

/*
    generally when it comes for duplicates, that means we can make use of maps. 

*/