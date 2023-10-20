let decimalToRoman = function (num) {
  const mpp = [
    { M: 1000 },
    { CM: 900 },
    { D: 500 },
    { CD: 400 },
    { C: 100 },
    { XC: 90 },
    { L: 50 },
    { XL: 40 },
    { X: 10 },
    { IX: 9 },
    { V: 5 },
    { IV: 4 },
    { I: 1 },
  ];

  let ans = "";
  for (let i = 0; i < mpp.length; i++) {
    while (Object.values(mpp[i])[0] <= num) {
      num -= Object.values(mpp[i])[0];
      ans += Object.keys(mpp[i])[0];
    }
  }
  return ans;
};

module.exports = decimalToRoman;
