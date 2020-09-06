var jump = function(nums) {
  let position=nums.length-1,step=0;
  while(position>0){
      for(let i=0;i<position;i++){
          if(i+nums[i]>=position){
              position=i;
              step++;
              break;
          }
      }
  }
  return step;
};