/*
    You are given the heads of two sorted linked lists list1 and list2.
    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    Return the head of the merged linked list.
    example 1:

    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2:

    Input: list1 = [], list2 = []
    Output: []

    example 3:

    Input: list1 = [], list2 = [0]
    Output: [0]

*/

var mergeTwoLists = function(list1, list2) {
    if(list1 == null){
        return list2
    }else if(list2 == null){
        return list1;
    }else if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }
    else if (list2.val <= list1.val) {
        list2.next = mergeTwoLists(list2.next,list1)
        return list2
    }

};

/*
    we can do this recursively.
    we compare both list1 value and list2 value, if list1 value is less, then we call the function again and list1.next willbe that value and vise versa.
*/