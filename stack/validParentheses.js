/*

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    

    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false

*/

// approach

/*
    When we encounter an opening bracket, we will need its closing bracket in the nearest future.
    Therefore, we push a closing bracket of the same type into a stack.
    When we encounter a closing bracket, it should be equivalent to the popped bracket (on top of stack).
    Otherwise, the given string is invalid.
    At the end, the stack should be empty (all parentheses had its own pair)
*/

var isValid = function (s) {
  let stack = [];
  if (s.length == 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "{") {
      stack.push("}");
    } else if (s.charAt(i) == "[") {
      stack.push("]");
    } else if (s.charAt(i) == "(") {
      stack.push(")");
    } else {
      if (s.charAt(i) !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length == 0;  /// if the stack has anything remaining means brackets are not closed properly, stack should be empty at the end.
};

console.log(isValid("()[]{}"))