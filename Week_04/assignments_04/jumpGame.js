var canJump = function(nums) {
  let queue=[[0,nums[0]]],visited=new Set();
  while(queue.length>0){
      let current=queue.shift();
      let index=current[0];
      for(let i=0;i<=current[1];i++){
          let nextNodeIndex=index+i;
          if(nextNodeIndex===nums.length-1)return true;
          if(!visited.has(nextNodeIndex)){
              queue.push([nextNodeIndex,nums[nextNodeIndex]]);
              visited.add(nextNodeIndex);
          }
      }
  }l
  return false;
};