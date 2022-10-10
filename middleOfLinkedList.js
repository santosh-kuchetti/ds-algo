/*
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.
*/
/*
    Input: head = [1,2,3,4,5]
    1 -> 2 -> 3 -> 4 -> 5
    since the middle node is 3, we return node 3.
    Output: [3,4,5]

    Input: head = [1,2,3,4,5,6]
    1 -> 2 -> 3 -> 4 -> 5 -> 6
    since the we have two middle nodes as 3 and 4, we return second node 4.
    Output: [4,5,6]
*/
/*
    Fast and Slow pointer Approch.
    we can achieve it by using slowand fast pointer approch.
    the main concept of this process is twopointers moves from the same stating point. but one moves slow and another moves faster.
    if fast moves two steps and slow moves one step once, then by the time fast reaches the end, the slow should at the middle of the linkedList
    we will return the slow node. since we need the middle
*/

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};