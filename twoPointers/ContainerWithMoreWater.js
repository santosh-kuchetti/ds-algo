/*
    You are given an integer array height of length n. There are n vertical lines drawn such that
     the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.


    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
    In this case, the max area of water (blue section) the container can contain is 49.

*/

let maxArea = (function (height) {
  let s = 0;
  let e = height.length - 1;
  let maxArea = 0;
  while (s <= e) {
    let area = (e - s) * Math.min(height[s], height[e]);
    maxArea = Math.max(maxArea, area);
    if (Math.min(height[s], height[e]) == height[s]) {
      s++;
    } else {
      e--;
    }
  }

  return maxArea;
})([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log(maxArea)

/*
    we can solve this problem by comparing each element of the array and check for maxArea and finally returning the maxArea.
    but thats not the optimised case.
    in this case we can use two pointers and if the staring pointer is less than last pointer we will increment the sarting pointer
     else we will decrement the last pointer. in the meanwhile we will be calculating the area and compare for maxArea.
      and finally we will return the maxArea
*/