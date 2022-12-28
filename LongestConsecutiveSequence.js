/*
    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    You must write an algorithm that runs in O(n) time.

    Example 1:

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


    Example 2:

    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9

*/

var longestConsecutive1 = function(nums) {
    if(nums.length == 0){
        return 0
    }else if(nums.length == 1){
        return 1
    }
    let max = 0;
    let currMax = 1;
    let arr = nums.sort((a,b) => a-b)
    for(let i = 0;i< nums.length;i++){
        if(arr[i] != arr[i-1]){           // we are checking this for if any repeated element is there, we will skip it
            if(arr[i] == arr[i-1]+1){
                currMax++;
            }else{
                currMax = 1
            }
        }
        if(currMax > max){
            max = currMax
        }
    }
    return max

}([0,3,7,2,5,8,4,6,0,1]);

console.log(longestConsecutive1)


/*
    we can see like by sorting  we can get elements in a sorted order.
    after that, we canmaintain one max variable and currentMax and see whether the element is next element of previous element,
     if yes we can increase currentMax by one else we check whether currentMax is greater than max value or not if yes, max will be cuurentMax
     at the end we will return the max.

     so the timeComplexity will be o(nlogn)
*/


var longestConsecutive2 = function(nums) {
    if(nums.length == 0){
        return 0
    }else if(nums.length == 1){
        return 1
    }

    let set = new Set(nums);
    let max = 0;
    for(let i = 0;i<nums.length;i++){
        if(set.has(nums[i]-1)){
            continue;
        }else{
            length = 1
            while(set.has(nums[i]+length)){
                length++
            }
            if(max < length){
                max = length
            }
        }
    }
    return max

}([0,3,7,2,5,8,4,6,0,1]);

console.log(longestConsecutive2)

/*
    lets see by example [100,4,200,1,3,2]

    {1,2,3,4} are in flow, {100} is in the flow, {200} is in the flow

    so the starting numbers are 1, 100, 200. beacuse there is no previous element to these in this array.

    if we know the starting element, we can we can check up on up to where its consequitive sequence go
*/