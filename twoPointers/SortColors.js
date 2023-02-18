/*
    Given an array nums with n objects colored red, white, or blue,
    sort them in-place so that objects of the same color are adjacent,
    with the colors in the order red, white, and blue.

    We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

    You must solve this problem without using the library's sort function.

    Example 1:

    Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
    Example 2:

    Input: nums = [2,0,1]
    Output: [0,1,2]
*/

let req = function (arr) {
    let s = 0;
    let e = arr.length - 1;
    let i = 0
    while (i <= e) {
        if (arr[i] == 0) {
            [arr[i], arr[s]] = [arr[s], arr[i]];
            s++;
        } else if (arr[i] == 2) {
            [arr[i], arr[e]] = [arr[e], arr[i]];
            e--;
            continue;
        }
        i++
    }
    return arr
}([2, 0, 2, 1, 1, 0]);

console.log(req)
