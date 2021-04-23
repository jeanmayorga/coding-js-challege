function main(array) {
  const arrayWithZeros = [];
  const arrayWithoutZeros = [];

  // move all zeros to right
  array.forEach((number) => {
    if (number === 0) {
      arrayWithZeros.push(0);
    } else {
      arrayWithoutZeros.push(number);
    }
  });
  const allZerosInRight = [...arrayWithoutZeros, ...arrayWithZeros];
  console.log({ allZerosInRight });

  const representAsFictitiousInt = Number(arrayWithoutZeros.join(""));

  const addOneToFictitiousInt = representAsFictitiousInt + 1;

  const fictitiousIntToList = Array.from(addOneToFictitiousInt.toString()).map(
    Number
  );
  console.log({ fictitiousIntToList });

  const multiplyByMinusOne = arrayWithoutZeros.map(
    (number, index) => {
      const isEven = index % 2 === 0;
      if (isEven) return number * -1;
      return number;
    }
  );

  // multiply by -1 each digit in even position of the array without zeros
  let highSum = 0;
  let currentSum = 0;
  multiplyByMinusOne.forEach((number) => {
    const sum = currentSum + number;
    currentSum = Math.max(0, sum);
    highSum = Math.max(highSum, currentSum);
  });

  console.log({ highSum });

  return highSum
}

const array = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
main(array);
