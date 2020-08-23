var preorderTraversal = function(root) {
  let arr=[];
  if(root===null)return [];
  function traverse(root){
    arr.push(root.val);
    if(root.left)traverse(root.left);
    if(root.right)traverse(root.right)
  }
  traverse(root);
  return arr;
};