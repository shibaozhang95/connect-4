
// @return boolean
const doesWin = (matrix, row, col, turn) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // four ways to win
  // horizental
  let currRow;
  let currCol;

  let horizentalCount = 1;
  // to left
  currCol = col - 1;
  while (currCol >= 0 && matrix[row][currCol--] === turn) ++horizentalCount;
  // to right
  currCol = col + 1;
  while (currCol < cols && matrix[row][currCol++] === turn) ++horizentalCount;

  if (horizentalCount >= 4) return true;

  // vertival
  let verticalCount = 1;
  currRow = row - 1;
  while (currRow >= 0 && matrix[currRow--][col] === turn) ++verticalCount;
  currRow = row + 1;
  while (currRow < rows && matrix[currRow++][col] === turn) ++verticalCount;
  if (verticalCount >= 4) return true;

  // leftTop to right button;
  let ltCount = 1;
  currRow = row - 1;
  currCol = col - 1;
  while (currRow >= 0 && currCol >= 0 && matrix[currRow--][currCol--] === turn) ++ltCount;
  currRow = row + 1;
  currCol = col + 1;
  while (currRow < rows && currCol < cols && matrix[currRow++][currCol++] === turn) ++ltCount;
  if (ltCount >= 4) return true;

  // leftButton to rightTop
  let lbCount = 1;
  currRow = row + 1;
  currCol = col - 1;
  while (currRow < rows && currCol >= 0 && matrix[currRow++][currCol--] === turn) ++lbCount;
  currRow = row - 1;
  currCol = col + 1;
  while (currRow >= 0 && currCol < cols && matrix[currRow--][currCol++] === turn) ++lbCount;
  if (lbCount >= 4) return true;

  return false;
}

export {
  doesWin
};