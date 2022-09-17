function* fibonacci() {
  let a = 1;
  let b = 1;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
}
const fiboNumb = fibonacci();
let i = 0;
function fibonacciExponential() {
  while (i < 2) {
    i += 1;
    return 1;
  }
  const numb = fiboNumb.next().value;
  return numb * numb;
}

export default fibonacciExponential;
