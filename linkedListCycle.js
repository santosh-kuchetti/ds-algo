/*
    Given head, the head of a linked list, determine if the linked list has a cycle in it.
    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
    Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
    Return true if there is a cycle in the linked list. Otherwise, return false.
*/
/*
    Input: head = [3, 2, 0, -4];
    3 -> 2 -> 0 -> -4 -> 2
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 1st node(0 - indexed).
*/

/*
    Fast and Slow pointer Approch.
    we can achieve it by using slowand fast pointer approch.
    the main concept of this process is twopointers moves from the same stating point. but one moves slow and another moves faster.
    if any cycle is present, both pointer should meet at one place for sure, because they are moving different speeds.
    if they meets any where we returns true else we return false.
*/

var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true
        }
    }
    return false
};
