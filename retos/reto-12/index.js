function elfBattle(elf1, elf2) {
  let e1 = 3
  let e2 = 3

  for (let turn = 0; turn < elf1.length && e1 && e2; turn++) {
    e1 -= +(elf2[turn] == "A" && elf1[turn] != "B") +
      +(elf2[turn] == "F") * 2
    e2 -= +(elf1[turn] == "A" && elf2[turn] != "B") +
      +(elf1[turn] == "F") * 2
  }

  return !(e1 == e2) + (e2 > e1)
}
