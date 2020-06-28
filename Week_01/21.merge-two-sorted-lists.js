// 迭代法
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let preHead = {
        val: 0,
        next: null
    };
    let pointer = preHead;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    pointer.next = l1 ? l1 : l2;
    return preHead.next
};

// 递归法
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
};