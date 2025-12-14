/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  // Code here
  const invert_hand = { R: "L", L: "R" }

  let count = {
  }

  let response = []

  for (const glove of gloves) {
    count[glove.color] ||= {
      L: 0,
      R: 0
    }
    count[glove.color][glove.hand]++

    if (count[glove.color][glove.hand] && count[glove.color][invert_hand[glove.hand]]) {
      count[glove.color][glove.hand]--;
      count[glove.color][invert_hand[glove.hand]]--;

      response.push(glove.color)
    }
  }

  return response
}