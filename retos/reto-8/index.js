function findUniqueToy(toy) {
  const counts = toy.split("").reduce((acc, curr) => {
    acc[curr.toLowerCase()] ||= 0;
    acc[curr.toLowerCase()]++;

    return acc;
  }, {})

  return toy.split("").find(x => counts[x.toLowerCase()] == 1) ?? ""
}