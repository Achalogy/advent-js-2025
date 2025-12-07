/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  // Code here
  const w = (i) => 1 + (i * 2);

  const maxW = w(height - 1);

  const pattern = ("*".repeat(frequency - 1) + ornament).repeat((height * (height)))

  let tree = ""
  let acc = 0;

  for (let i = 0; i < height; i++) {
    const count = w(i);

    tree += " ".repeat(maxW / 2 - count / 2);
    tree += pattern.slice(acc, count + acc) + "\n"

    acc += count;
  }
  tree += " ".repeat(maxW/2) + "#"

  return tree.slice(0)
}
