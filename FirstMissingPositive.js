/*
    Given an unsorted integer array nums, return the smallest missing positive integer.
    ust implement an algorithm that runs in O(n) time and uses constant extra space.
 
    Example 1:

    Input: nums = [1,2,0]
    Output: 3
    Explanation: The numbers in the range [1,2] are all in the array.

    Example 2:

    Input: nums = [3,4,-1,1]
    Output: 2
    Explanation: 1 is in the array but 2 is missing.

    Example 3:

    Input: nums = [7,8,9,11,12]
    Output: 1
    Explanation: The smallest positive integer 1 is missing.

*/

var firstMissingPositive1 = function(nums) {
    nums = Array.from(new Set(nums))     // removing the duplicates. new Set(nums) gives us the object of values. Array.from() converts that values into array
    nums = nums.sort((a,b) =>a-b).filter(num => num > 0)    // we are sorting the values and filtering the values which are greater than 0. beacause our missing value stays in between 1 and n which is the length of array
    
     let min = 1    // maintaining the min value as the 1 beacause our min value starts from 1 only.
     for(let i = 0;i<nums.length;i++){      //  looping up to the length of the array
         if(min == nums[i]){            // if the current min is already in the index value, we will get 
             min++                      // if so our min value will be increased by one
         } else {                         
             return min                 // else that's it we foung our min value
         }
     }
     return min                         // finally return our min value
    
 }([7,8,9,11,12]);
 console.log(firstMissingPositive1);

// we can also silve using map

var firstMissingPositive2 = function(nums) {
    let map = new Map();
    for(let i = 0;i<nums.length;i++){        // since our min value will be in between 1 and length of the array, we are setting the values from 1 to length in a map
        map.set(nums[i],1)
    }

    for(let i = 1;i<=nums.length;i++){       // we are looping up to the length of the array
        if(!map.has(i)){                     // if the value is notpresent in the array, that;s it, we will return the value.
            return i
        }
    }
    return nums.length+1                     // cpming out of the loop means, we are having all the values inthe array. that means the next element is the min value which is length of the array + 1.
    
 }([7,8,9,11,12]);
 console.log(firstMissingPositive2);