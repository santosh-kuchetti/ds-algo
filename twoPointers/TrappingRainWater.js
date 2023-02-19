/*
    42. leetcode question 

    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

    Example 1:

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
     In this case, 6 units of rain water (blue section) are being trapped.
*/

let trap = (function (height) {
  let n = height.length;
  let l = 0;
  let r = n - 1;
  let rightMax = 0;
  let leftMax = 0;
  let res = 0;

  while (l <= r) {
    if (height[l] <= height[r]) {
      if (height[l] >= leftMax) {
        leftMax = height[l];
      } else {
        res += leftMax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rightMax) {
        rightMax = height[r];
      } else {
        res += rightMax - height[r];
      }
      r--;
    }
  }
  return res;
})([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

console.log(trap);

/*
    we can solve this problem using the two pointer approach.
    we maintain two pointers at left and right also initialize rightMax and left Max and obviously result as 0.
    we will be checking
     if height[l] is less than height[r],
        (then we will be also checking if height[l] is greater than leftMax, then left max will be height[l] otherwise
        res = res + (leftMax - height[l]))
    
    else
        (then we will be also checking if height[r] is greater than rightMax, then right max will be height[r] otherwise
        res = res + (rightMax - height[r]))


    and we will be running this loop till l <= r.

    then thats it we will get the res.



*/
