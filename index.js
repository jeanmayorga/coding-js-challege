const {
  moveAllZerosToRight,
  representAsFictitiousInt,
  addOneToFictitiousInt,
  fictitiousIntToList,
  multiplyByMinusOne,
  whoseSumOfDigitsisMaximun,
} = require("./parts");

function main(array) {
  const { allZerosInRight, arrayWithoutZeros } = moveAllZerosToRight(array);
  console.log({ allZerosInRight });

  const fictitiousInt = representAsFictitiousInt(arrayWithoutZeros);

  const fictitiousIntAddedOne = addOneToFictitiousInt(fictitiousInt);

  const fictitiousIntAddedOneInArray = fictitiousIntToList(
    fictitiousIntAddedOne
  );
  console.log({ fictitiousIntAddedOneInArray });

  const multiplyNewNumerByMinusOne = multiplyByMinusOne(
    arrayWithoutZeros
  );

  const sumOfMaxiumdigits = whoseSumOfDigitsisMaximun(
    multiplyNewNumerByMinusOne
  );
  console.log({ sumOfMaxiumdigits });
}

main([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]);
