/*
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Example 2:
    
    Input: nums = [1], k = 1
    Output: [1]

*/

var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0;i<nums.length;i++){      // we track of thesequence of the occurence of the numbersin the map.
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    let sorted = Array.from(map.keys()).sort((a,b)=> map.get(b) - map.get(a))  // we are taking the keys of the map and sorting then in descending order using the map values
    let req = []
    for(let i = 0;i<k;i++){  
        req.push(sorted[i])         // since we got the array of elements which are keys that to in descending order, we can pick first k elements and that's it
    }
    return req

}([1,1,1,2,2,3],2);

console.log(topKFrequent);