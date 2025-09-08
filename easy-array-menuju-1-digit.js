/*
====
Menuju 1 digit
====
Input : diberikan sebuah angka multi digit
Proses : tambahkan semua digit dalam angka, masukkan ke dalam array output, proses berhenti ketika angka sudah 1 digit
Output : tampilkan seluruh angka yang terbentuk dari penjumlahan semua digit angka, hingga mendapat angka 1 digit

Contoh :
Input : 123
Output : [6]

Input : 999
Output : [27, 9]

Input : 542984
Output : [32, 5]

Input : 9992
Output : [29, 11, 2]
*/

const solution = (num, res = []) => {
  const arrNum = String(num)
    .split("")
    .map((num) => Number(num));

  const total = arrNum.reduce((acc, currVal) => {
    return acc + currVal;
  });

  res.push(total);
  if (total > 9) {
    solution(total, res);
  }
  return res;
};

console.log(solution(123));
console.log(solution(999));
console.log(solution(542984));
console.log(solution(9992));
