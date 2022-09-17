function* powersOfTwo() {
  let numb = 2;
  yield numb;
  while (true) {
    yield numb *= 2;
  }
}

export default powersOfTwo;
