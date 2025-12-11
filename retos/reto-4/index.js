/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  // Code here

  const operations = {
    "+": 1,
    "-": -1
  }

  const instructions = code.replace(/\[/g, "").split("]").slice(0, -1)

  let response = ""
  let latest = ""

  for (const instruction of instructions) {
    if (instruction == "<") {
      response += latest;
      continue;
    }

    let num = Number(instruction[0]);

    for (const op of instruction.slice(1)) {
      num += operations[op]
      if (num == -1) num = 9;
      num %= 10;
    }

    latest = num.toString();
    response += num.toString();
  }

  return response.length == 4 ? response : null;
}
