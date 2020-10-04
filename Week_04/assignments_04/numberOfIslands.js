var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let colLength = grid[0].length,
    num = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === "1") {
        grid[row][col] = "0";
        bfs(row, col);
        num++;
      }
    }
  }
  function bfs(row, col) {
    let queue = [[row, col]],
      rowMax = grid.length - 1,
      colMax = grid[0].length - 1;
    while (queue.length > 0) {
      let current = queue.shift();
      let currentRow = current[0];
      let currentCol = current[1];
      if (currentRow - 1 >= 0 && grid[currentRow - 1][currentCol] === "1") {
        queue.push([currentRow - 1, currentCol]);
        grid[currentRow - 1][currentCol] = "0";
      }
      if (
        currentRow + 1 <= rowMax &&
        grid[currentRow + 1][currentCol] === "1"
      ) {
        queue.push([currentRow + 1, currentCol]);
        grid[currentRow + 1][currentCol] = "0";
      }
      if (currentCol - 1 >= 0 && grid[currentRow][currentCol - 1] === "1") {
        queue.push([currentRow, currentCol - 1]);
        grid[currentRow][currentCol - 1] = "0";
      }
      if (
        currentCol + 1 <= colMax &&
        grid[currentRow][currentCol + 1] === "1"
      ) {
        queue.push([currentRow, currentCol + 1]);
        grid[currentRow][currentCol + 1] = "0";
      }
    }
  }
  return num;
};


