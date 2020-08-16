var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  if (l1) current.next = l1;
  if (l2) current.next = l2;
  return dummy.next;
};
