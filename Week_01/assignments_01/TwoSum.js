var twoSum = function(nums, target) {
  let map={},len=nums.length;
  for(let i=0;i<len;i++){
      let n=target-nums[i];
      if(map[nums[i]]!==undefined)return[map[nums[i]],i];
      map[n]=i;
  }
};