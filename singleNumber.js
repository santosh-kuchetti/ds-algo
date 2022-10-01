/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example 1:

    Input: nums = [2,2,1]
    Output: 1

*/
/*
    the main idea behaind this is they are asking to find the unique number in the array.
    we have a map functionality which will be usefull here in this case.
    we can store the elements in the map with the count of its occurences like key as elements of array and values as count of its occurennces.
    after that we can run a loop and find which key has the count as 1 and we will return it.
*/
let nums = [2, 2, 1];

var singleNumber = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {    // here we are running a for loop to store the elements and its occurences in the map
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [k, i] of map) {     // here we are running a loop to find which key has occurence as 1.
        if (map.get(k) == 1) {
            return k;
        }
    }
}(nums);
console.log(singleNumber) // we can get 1 here.