/*
    Given an encoded string, return its decoded string.
    The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
    You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
    The test cases are generated so that the length of the output will never exceed 105.
        
        Example 1:

        Input: s = "3[a]2[bc]"
        Output: "aaabcbc"

        Example 2:

        Input: s = "3[a2[c]]"
        Output: "accaccacc"    
*/
/*
    this is a Good sum to solve.
    

*/
var decodeString = function (s) {
    let numStack = [];
    let resStack = [];
    let i = 0;
    let res = '';
    while (i < s.length) {
        if (!isNaN(s[i])) {
            let num = Number(s[i]);
            i++;
            while (!isNaN(s[i])) {
                let temp = Number(s[i])
                num = num * 10 + temp - '0';
                i++;
            }
            numStack.push(num);
            continue;
        } else if (s[i] == '[') {
            resStack.push(res);
            res = '';

        } else if (s[i] == ']') {
            res = resStack.pop() + res.repeat(numStack.pop())

        } else {
            res += s[i];

        }
        i++;
    }
    return res;


};