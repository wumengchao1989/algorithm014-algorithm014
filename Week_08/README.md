学习笔记

Major Sort Method

```javascript
const { count } = require("console");
const { performance, PerformanceObserver } = require("perf_hooks");

function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let preIndex = i - 1;
    let current = nums[i];
    while (preIndex >= 0 && current < nums[preIndex]) {
      nums[preIndex + 1] = nums[preIndex];
      preIndex--;
    }
    nums[preIndex + 1] = current;
  }
  return nums;
}

function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
}

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums;
}

function quickSort(nums, start, end) {
  if (start >= end) return;
  let pivot = partition(nums, start, end);
  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
  function partition(nums, start, end) {
    let pivot = end,
      counter = start;
    for (let i = start; i < end; i++) {
      if (nums[i] < nums[pivot]) {
        let temp = nums[counter];
        nums[counter] = nums[i];
        nums[i] = temp;
        counter++;
      }
    }
    let temp = nums[pivot];
    nums[pivot] = nums[counter];
    nums[counter] = temp;
    return counter;
  }
}

function mergeSort(nums, left, right) {
  if (right <= left) return;
  let mid = (left + right) >> 1;
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
  function merge(nums, left, mid, right) {
    let temp = [];
    let i = left;
    let j = mid + 1;
    k = 0;
    while (i <= mid && j <= right) {
      temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++];
    }
    while (i <= mid) {
      temp[k++] = nums[i++];
    }
    while (j <= right) {
      temp[k++] = nums[j++];
    }
    for (let i = 0; i < temp.length; i++) {
      nums[left + i] = temp[i];
    }
  }
}

function shellSort(nums) {
  let len = nums.length;
  for (let gap = len >> 1; gap > 0; gap = gap >> 1) {
    for (let i = gap; i < len; i++) {
      let current = nums[i];
      let j = i;
      while (j > 0 && nums[j - gap] > current) {
        nums[j] = nums[j - gap];
        j = j - gap;
      }
      nums[j] = current;
    }
  }
  return nums;
}

let nums = (() => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 1000));
  }
  return arr;
})();

performance.mark("A");
mergeSort(nums, 0, nums.length - 1);
performance.mark("B");

performance.mark("C");
nums.sort((a, b) => a - b);
performance.mark("D");

function getMeasureTime(start, end) {
  performance.measure(`${start} to ${end}`, start, end);
  const entry = performance.getEntriesByName(`${start} to ${end}`)[0];
  return entry.duration;
}
```
