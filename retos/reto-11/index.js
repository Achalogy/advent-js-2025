/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {

  const getPos = (i, j) => {

    if (i < 0 || i >= warehouse.length) return '.'
    if (j < 0 || j >= warehouse[i].length) return '.'

    return warehouse[i][j]
  }

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  let response = 0;

  for (const [i_line, line] of warehouse.entries()) {
    for (const [i_char, char] of line.split("").entries()) {
      if (char == '*') {
        const is_protected = directions.some(dir => getPos(i_line + dir[0], i_char + dir[1]) == "#")

        if (!is_protected) response++
      }
    }
  }

  return response
}