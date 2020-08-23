var inorderTraversal = function (root) {
  let arr = [];
  if (!root) return [];
  function traverse(root) {
    if (root.left) traverse(root.left);
    arr.push(root.val);
    if (root.right) traverse(root.right);
  }
  traverse(root);
  return arr;
};
