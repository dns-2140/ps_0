/*
Buatlah fungsi sumFirst yang akan menerima input sebuah array 2 dimensi yang berisi angka2 random dan mengembalikan hasil penjumlahan element pertama saja dari setiap nested array nya
*/

let arr = [
  [1, 2, 3],
  [5, 4, 3, 2, 1],
  [10, 100000],
];

const sumFirst = (arr) => {
  let res = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    res += arr[i][0];
  }
  return res;
};

console.log(sumFirst(arr)); // 16, didapat dari 1 + 5 + 10
