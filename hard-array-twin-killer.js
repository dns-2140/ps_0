/*
====
Twin Killer
====
Terjadi pembunuhan terhadap orang kembar yang menghebohkan. Keduanya dibunuh di tempat yang berbeda, namun sempat berkomunikasi untuk mengungkapkan nama pembunuhnya, yang, sayang sekali, seseorang yang mereka kenal.

Orang pertama memberikan kumpulan huruf yang diacak, dan orang kedua memberikan array yang berisi index dari huruf yang diacak, yang jika digabungkan, akan menghasilkan sebuah nama. Angka negatif akan menghasilkan spasi

Contoh :
kata = 'yudmjiqouabw'
array = [10, 7, 3, 5, -8, 4, 5, 11, 7]
output :
  Nama pembunuhnya adalah : bomi jiwo

kata = 'poiuytlkjhgfaez'
array = [14, 3, 13, 6, 1, -3, 1, 11, -1, 12, 14, 8, 2, 0, 1, 9]
output :
  Nama pembunuhnya adalah : zuelo of azjipoh
*/

const solution = (randomLetters, indexArr) => {
  let theKiller = "";
  for (let i = 0; i <= indexArr.length - 1; i++) {
    if (indexArr[i] < 0) {
      theKiller += " ";
    } else {
      theKiller += randomLetters[indexArr[i]];
    }
  }
  return `Nama pembunuhnya adalah: ${theKiller}`;
};

console.log(solution("yudmjiqouabw", [10, 7, 3, 5, -8, 4, 5, 11, 7]));
console.log(
  solution(
    "poiuytlkjhgfaez",
    [14, 3, 13, 6, 1, -3, 1, 11, -1, 12, 14, 8, 2, 0, 1, 9]
  )
);
