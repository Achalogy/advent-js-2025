/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  let queue = [[]]

  while (queue.length) {
    const p = queue.shift()

    let obj = { ...workshop };

    for (const key of p)
      obj = obj[key]
    if (typeof obj != "object") continue;

    for (const key of Object.keys(obj)) {
      if (obj[key] == gift) {
        return [...p, key]
      }
      queue.push([...p, key])
    }
  }
  return []
}