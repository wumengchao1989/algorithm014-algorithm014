var rotate = function (nums, k) {
  while (k > 0) {
    let num = nums.pop();
    nums.unshift(num);
    k--;
  }
  return nums;
};
