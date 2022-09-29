/*
    Given an integer array nums, return true if any value
     appears at least twice in the array, and return false
      if every element is distinct.
*/
const nums = [1, 2, 3, 1]

// 1.
var containsDuplicate1 = function (nums) {
    let count = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count = true;
                return count;
            }
        }
    }
    return count
}(nums);
console.log(containsDuplicate1)

//2.
/*
    by using Map, we can achieve it veri easyly in o(n) time compplexity.
    we will run one loop and checks at each item in the array like,
    we can compare whether item contain in map or not. if present we can retur true.
    otherwise, we set the item into the map.
*/
var ContainsDuplicate2 = function(nums){
    let contain = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (contain.has(nums[i])) return true;
        contain.set(nums[i])        
    }
    return false;
}(nums)
console.log(ContainsDuplicate2)