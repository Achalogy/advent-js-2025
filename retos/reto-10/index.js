/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let opened = 0;
  let max = 0;

  for (const c of s.split("")) {
    if (c == "[")
      opened++;
    else opened--;

    if (opened < 0) return -1;
    max = Math.max(opened, max)
  }
  if (opened != 0) return -1

  return max
}