/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example 1:

    Input: nums = [2,2,1]
    Output: 1

*/

let nums = [2, 2, 1];

// 1

/*
    the main idea behaind this is they are asking to find the unique number in the array.
    we have a map functionality which will be usefull here in this case.
    we can store the elements in the map with the count of its occurences like key as elements of array and values as count of its occurennces.
    after that we can run a loop and find which key has the count as 1 and we will return it.
*/

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

// 2

/*
    for eleminating using two loops, we can use an object.
    we can set elment as key and count as value
    we can do like when we already have the key in the object, we simply delete it. 
    when we don't have the element as key in the object, we can add it as a key and set ots value to 1.
    finally we can have a object with only one key because we are deleting all the keys which are repeating again.
    we can access them by 'Object.keys(object)' which gives us the array of keys of object and our value is in 1st index,
    so 'Object.keys(object)[0]' gives us the the which key i,e oue element having the unique occurence.
*/

var singleNumber2 = function (nums) {
    let have = {};
    for (let i of nums) {
        have[i] ? delete have[i] : have[i] = 1;
    }
    return Object.keys(have)[0]
}(nums);
console.log(singleNumber2)  // we get 1 here

//3
// bit maipulation
/*
    we canmake use of XOR operator here. By doing this we can get the optimal solution than befor approch
    0 ^ 0 = 0
    0 ^ 1 = 1
    1 ^ 1 = 0
    1 ^ 0 = 1

    anything XOR with 0 gives itself
    anythinf XOR with itself gives 0

    means what i wann say is we have an array [2,2,1]
    2 ^ 2 ^ 1;
    means,
    2 ^ 2 = 0 and
    0 ^ 1 = 1
*/

var singleNumber3 = function (nums) {
    let result = 0
    for (let i of nums) {
        result ^= i;
    }
    return result
}(nums);
console.log(singleNumber3) // we get 1 here
