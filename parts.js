function moveAllZerosToRight(array) {
  const arrayWithZeros = [];
  const arrayWithoutZeros = [];

  array.forEach((number) => {
    if (number === 0) {
      arrayWithZeros.push(0);
    } else {
      arrayWithoutZeros.push(number);
    }
  });
  const allZerosInRight = [...arrayWithoutZeros, ...arrayWithZeros];

  return { allZerosInRight, arrayWithoutZeros, arrayWithZeros };
}

function representAsFictitiousInt(array) {
  return Number(array.join(""));
}

function addOneToFictitiousInt(number) {
  return number + 1;
}

function fictitiousIntToList(number) {
  return Array.from(number.toString()).map(Number);
}

function multiplyByMinusOne(array) {
  return array.map((number, index) => {
    const isEven = index % 2 === 0;
    if (isEven) return number * -1;
    return number;
  });
}

function whoseSumOfDigitsisMaximun(array) {
  let highSum = 0;
  let currentSum = 0;
  array.forEach((number) => {
    const sum = currentSum + number;
    currentSum = Math.max(0, sum);
    highSum = Math.max(highSum, currentSum);
  });

  return highSum;
}

module.exports = {
  moveAllZerosToRight,
  representAsFictitiousInt,
  addOneToFictitiousInt,
  fictitiousIntToList,
  multiplyByMinusOne,
  whoseSumOfDigitsisMaximun,
};
