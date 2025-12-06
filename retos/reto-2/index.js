/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  // Code here
  return giftsToProduce.filter(x => x.quantity > 0).flatMap(x => Array.from({ length: x.quantity }).fill(x.toy))
}