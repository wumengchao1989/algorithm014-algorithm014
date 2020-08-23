var rotate = (nums, k) => {
  const len = nums.length;
  k%=nums.length;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};
var reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

rotate([2, 3, 4, 5, 6, 7], 3);
