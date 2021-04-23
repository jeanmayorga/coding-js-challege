const { test } = require("@jest/globals");
const {
  moveAllZerosToRight,
  representAsFictitiousInt,
  addOneToFictitiousInt,
  fictitiousIntToList,
  multiplyByMinusOne,
  whoseSumOfDigitsisMaximun
} = require("./parts");

describe("Taller Challenge", () => {
  test("should move all zeros to right", () => {
    const array = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
    const { allZerosInRight } = moveAllZerosToRight([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]);

    expect([4, 8, 9, 2, 5, 3, 3, 0, 0, 0]).toStrictEqual(allZerosInRight);
  });

  test("should represent as fictitious integer", () => {
    const array = [4, 8, 9, 2, 5, 3, 3];
    const result = representAsFictitiousInt(array);

    expect(4892533).toBe(result);
  });

  test("should add 1 unit to the fictitious integer", () => {
    const result = addOneToFictitiousInt(4892533);

    expect(4892534).toBe(result);
  });

  test("should leave the the fictitious integer to a list", () => {
    const result = fictitiousIntToList(4892534);

    expect([4, 8, 9, 2, 5, 3, 4]).toStrictEqual(result);
  });

  test("should multiply by -1 each digit in even position of the array without zeros", () => {
    const array = [4, 8, 9, 2, 5, 8, 4, 9];
    const result = multiplyByMinusOne(array);

    expect([-4, 8, -9, 2, -5, 8, -4, 9]).toStrictEqual(result);
  });

  test("should detect the sub-array, whose sum of digits is the maximum", () => {
    const array = [-4, 8, -9, 2, -5, 8, -4, 9];
    const result = whoseSumOfDigitsisMaximun(array);

    expect(13).toBe(result);
  });
});
