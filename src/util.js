const handleCalculatorRequest = (func, numberA, numberB) => {
  const result = func(parseInt(numberA), parseInt(numberB));
  if (result != Infinity && (result || result === 0)) return result.toString();
  throw "Calculation Error";
};

module.exports = { handleCalculatorRequest };
