/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const moveMap = {
    'L': [0, -1],
    'R': [0, 1],
    'U': [-1, 0],
    'D': [1, 0],
  }

  // Code here
  const boardMap = board.trim().split(/\n+/).map(x => x.split(""))

  let y = boardMap.findIndex(x => x.includes("@"))
  let x = boardMap[y].indexOf("@")

  for (const move of moves) {
    y += moveMap[move][0];
    x += moveMap[move][1];

    if (y >= boardMap.length ||
      y < 0 ||
      x >= boardMap[0].length ||
      x < 0 ||
      boardMap[y][x] == "#") return "crash";
    if (boardMap[y][x] == "*") return "success";
  }
  return 'fail'
}