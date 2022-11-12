/*
    Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

    Example 1:

    Input: head = [1,2,2,1]
    1 -> 2 -> 2-> 1
    Output: true
*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let head = [1, 2, 2, 1];
var linkedlist = function (arr) {
    let head = null;
    for (let i = 0; i < arr.length; i++){
        let node = new ListNode(arr[i], head)
        while (node.next) {
            node = node.next;
        }
        
    }
    return head
}
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reveseLinkedList(slow.next);
    slow = slow.next;
    while (slow != null) {
        if (head.val != slow.val) {
            return false
        }
        head = head.next;
        slow = slow.next
    }
    return true;

}(linkedlist);

var reveseLinkedList = function(head) {
    next = null;
    prev = null;
    while (head != null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}