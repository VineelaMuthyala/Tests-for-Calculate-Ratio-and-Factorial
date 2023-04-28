const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

function ratioAndFactorial(N1 = 2, N2 = 4, N3 = 3) {
  const result = { ratio: ratio(N1, N2), factorial: factorial(N3) };
  return result;
}
module.exports = ratioAndFactorial;
