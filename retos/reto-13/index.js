/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  let y = 0;
  let x = 0;
  factory = factory.map(x => x.split(""))

  while (1) {
    const casilla = factory?.at(y)?.at(x)
    if (!casilla || y < 0 || x < 0) return "broken"
    factory[y][x] = "*"
    switch (casilla) {
      case ".": return "completed";
      case "*": return "loop";
      case ">": x++; break;
      case "<": x--; break;
      case "^": y--; break;
      case "v": y++; break;
    }
  }
}