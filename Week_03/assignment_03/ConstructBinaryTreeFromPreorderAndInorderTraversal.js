var buildTree = function(preorder, inorder) {
  if (inorder.legnth === 0) return null;

  let index = inorder.indexOf(preorder[0]);
  let root = new TreeNode(preorder.shift());
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
  
};
