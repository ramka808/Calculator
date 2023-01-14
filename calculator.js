const OPERATIONS = {
  sum: "+",
  substract: "-",
  multyply: "*",
  division: "/",
};

function calculate({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;
    case OPERATIONS.substract:
      result = subtract(a, b);
      break;

    case OPERATIONS.multyply:
      result = multyply(a, b);
      break;
    case OPERATIONS.division:
      result = division(a, b);
      break;
    default:
      break;
  }
  return result
}
