var preorder = function (root) {
  let arr = [];
  function traverse(root) {
    if (root === null) return;
    if (root.children.length === 0) return arr.push(root.val);
    arr.push(root.val);
    for (let child of root.children) {
      traverse(child);
    }
  }
  traverse(root);
  return arr;
};
