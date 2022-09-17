
function* indexGenerator() {
  let id = 0;
  while (true) {
    yield id += 1;
  }
}

export default indexGenerator;
