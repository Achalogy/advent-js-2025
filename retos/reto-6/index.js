/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  // Code here
  const count = gloves.reduce((acc, glove) => {
    acc[glove.color] ||= {
      L: 0,
      R: 0
    }
    acc[glove.color][glove.hand]++;

    return acc;
  }, {})

  return Object.keys(count).flatMap(x =>
    Array.from({ length: Math.min(count[x].L, count[x].R) }).fill(x)
  )
}