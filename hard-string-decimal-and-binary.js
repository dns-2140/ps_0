/*
Buatlah 2 buah fungsi :

1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal

CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
  let res = "";
  const processNumber = (num) => {
    let currentQuotient = Math.floor(num / 2);
    let currentRemainder = num % 2;

    res += currentRemainder;

    if (currentQuotient !== 0) {
      processNumber(currentQuotient);
    }
  };

  processNumber(angka);
  const revReversed = res.split("").reverse().join("");
  return revReversed;
}

console.log(decimalToBinary(0)); // 0
console.log(decimalToBinary(1)); // 1
console.log(decimalToBinary(2)); // 10
console.log(decimalToBinary(5)); // 101
console.log(decimalToBinary(20)); // 10100

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binaryToDecimal(binary) {
  // your code here
  const binaryArr = binary.split("").map((el) => Number(el));
  const reversedBinaryArr = binaryArr.reverse();
  const decimal = reversedBinaryArr.map((el, i) => {
    return el * 2 ** i;
  });
  const res = decimal.reduce((a, b) => a + b);
  return res;
}

console.log(binaryToDecimal("0")); // 0
console.log(binaryToDecimal("1")); // 1
console.log(binaryToDecimal("101")); // 5
console.log(binaryToDecimal("10100")); // 20
console.log(binaryToDecimal("11011")); // 27
