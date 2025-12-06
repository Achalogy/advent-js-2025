/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {

  const operations = {
    "+": 1,
    "-": -1
  }
  // Code here
  const instructions = code.replace(/\[/g, "").split("]").slice(0, -1)

  let response = ""
  let latest = ""

  instructions.forEach(ins => {
    if (ins[0] == "<") {
      response += latest;
      return;
    }
    let num = Number(ins[0]);

    for (const char of ins.slice(1)) {
      num += operations[char];
      if (num == -1) num = 9;
      num = Number(num.toString()?.at(-1))
    }

    latest = num.toString();
    response += latest;
  })

  return response.length == 4 ? response : null
}
