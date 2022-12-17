/*
    Given an integer array nums of length n where all the integers of nums are in the range [1, n] and 
    each integer appears once or twice, return an array of all the integers that appears twice.
    You must write an algorithm that runs in O(n) time and uses only constant extra space.

    Example 1:

    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [2,3]
*/

var findDuplicates = function(nums) {
    
    let map = new Map();
    let req = []
    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }

    for([k,i] of map){
        if(map.get(k) == 2){
             req.push(k)
        }
    }
    return req
};
