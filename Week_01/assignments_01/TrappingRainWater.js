/**
 * @param {number[]} height
 * @return {number}
 */

 /* Brute Force */
 var trap = function(height) {
  let len=height.length,max=0;
  for(let cur=1;cur<len-1;cur++){
      let leftMax=0,rightMax=0;
      for(let left=0;left<cur;left++){
          leftMax=Math.max(leftMax,height[left]);
      }
      for(let right=len-1;right>cur;right--){
          rightMax=Math.max(rightMax,height[right]);
      }
      if(leftMax>height[cur]&&rightMax>height[cur]){
          max+=Math.min(leftMax,rightMax)-height[cur]
      }
  }
  return max;
};

/* Memo */

var trap=function(height){
  
}