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

var longestConsecutive = function(nums) {
    if(nums.length == 0){
        return 0
    }else if(nums.length == 1){
        return 1
    }
    let max = 0;
    let currMax = 1;
    let arr = nums.sort((a,b) => a-b)
    for(let i = 0;i< nums.length;i++){
        if(arr[i] != arr[i-1]){
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

console.log(longestConsecutive)