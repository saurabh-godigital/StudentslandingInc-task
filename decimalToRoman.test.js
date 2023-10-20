const decimalToRoman = require("./decimalToRoman");

test("testing for small numbers, less than 10", () => {
  expect(decimalToRoman(1)).toBe("I");
  expect(decimalToRoman(2)).toBe("II");
  expect(decimalToRoman(3)).toBe("III");
  expect(decimalToRoman(4)).toBe("IV");
  expect(decimalToRoman(5)).toBe("V");
  expect(decimalToRoman(6)).toBe("VI");
  expect(decimalToRoman(7)).toBe("VII");
  expect(decimalToRoman(8)).toBe("VIII");
  expect(decimalToRoman(9)).toBe("IX");
});

test("testing for numbers between 10 and 100", () => {
  expect(decimalToRoman(12)).toBe("XII");
  expect(decimalToRoman(27)).toBe("XXVII");
  expect(decimalToRoman(44)).toBe("XLIV");
  expect(decimalToRoman(99)).toBe("XCIX");
});

test("testing for numbers between 100 and 1000", () => {
  expect(decimalToRoman(111)).toBe("CXI");
  expect(decimalToRoman(555)).toBe("DLV");
  expect(decimalToRoman(789)).toBe("DCCLXXXIX");
});

test("testing for numbers greater than or equal to 1000", () => {
  expect(decimalToRoman(1000)).toBe("M");
  expect(decimalToRoman(1987)).toBe("MCMLXXXVII");
  expect(decimalToRoman(3999)).toBe("MMMCMXCIX");
});

test("testing for edge cases", () => {
  expect(decimalToRoman(1)).toBe("I");
  expect(decimalToRoman(4)).toBe("IV");
  expect(decimalToRoman(5)).toBe("V");
  expect(decimalToRoman(9)).toBe("IX");
});
