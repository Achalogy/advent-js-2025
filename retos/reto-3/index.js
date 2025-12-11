/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  // Code here

  if (size < 2) return ""

  const top_bottom = symbol.repeat(size)
  const middle = symbol + " ".repeat(size - 2) + symbol

  return top_bottom + "\n" + (middle + "\n").repeat(size - 2) + top_bottom
}