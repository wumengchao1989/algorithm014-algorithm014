var moveZeroes = function(nums) {
  let j=0,len=nums.length;
  for(let i=0;i<len;i++){
      if(nums[i]!==0){
          let temp=nums[i];
          nums[i]=nums[j];
          nums[j]=temp;
          j++;
      }
  }
  return nums;
};