var minPathSum = function(grid) {
  let lenI=grid.length,lenJ=grid[0].length
  for(let i=0;i<lenI;i++){
      for(let j=0;j<lenJ;j++){
          if(i===0&&j===0){
              continue;
          }else if(i===0&&j!==0){
              grid[i][j]=grid[i][j]+grid[i][j-1]
          }else if(j===0&&i!==0){
              grid[i][j]=grid[i][j]+grid[i-1][j];
          }else{
              grid[i][j]=Math.min(grid[i-1][j],grid[i][j-1])+grid[i][j];
          }
      }
  }
  return grid[lenI-1][lenJ-1]
};