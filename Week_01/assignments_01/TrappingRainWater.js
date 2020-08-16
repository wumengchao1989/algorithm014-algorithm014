/**
 * @param {number[]} height
 * @return {number}
 */

/* Brute Force */
var trap = function (height) {
  let len = height.length,
    capacity = 0;
  for (let cur = 1; cur < len - 1; cur++) {
    let leftMax = 0,
      rightMax = 0;
    for (let left = 0; left < cur; left++) {
      leftMax = Math.max(leftMax, height[left]);
    }
    for (let right = len - 1; right > cur; right--) {
      rightMax = Math.max(rightMax, height[right]);
    }
    if (leftMax > height[cur] && rightMax > height[cur]) {
      capacity += Math.min(leftMax, rightMax) - height[cur];
    }
  }
  return capacity;
};

/* Memo */

var trap = function (height) {
  let len = height.length,
    leftMaxMemo = [],
    rightMaxMemo = [],
    capacity = 0;

  rightMaxMemo[len - 1] = height[len - 1];
  
  leftMaxMemo[0] = height[0];
  for (let l = 1; l < len; l++) {
    leftMaxMemo[l] = Math.max(leftMaxMemo[l - 1], height[l]);
  }

  for (let r = len - 2; r >= 0; r--) {
    rightMaxMemo[r] = Math.max(rightMaxMemo[r + 1], height[r]);
  }

  for (let i = 1; i < len - 1; i++) {
    capacity += Math.min(leftMaxMemo[i], rightMaxMemo[i]) - height[i];
  }

  return capacity;
};
