/*
Buatlah sebuah function catchTheWord yang akan menerima input berupa array 2 dimensi. Ambil huruf dari tiap nested array dan rangkaikan jadi 1 kalimat. Hiraukan semua spasi. Dan jika di nested array tersebut tidak ada huruf, tidak usah ambil apapun
*/

let arr_str = [
  [" ", "H", " "],
  ["a", " ", " ", " ", " "],
  [" ", " ", " ", " ", "c", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "t", " "],
  [" ", " ", "i", " ", " "],
  [" ", " ", " ", "v", " "],
  [" "],
  [" ", " ", " ", " ", "8"],
];

const catchTheWord = (arr, res = "") => {
  for (let i = 0; i <= arr.length - 1; i++) {
    const filteredArr = arr[i].filter((el) => el !== " ");
    if (filteredArr.length) {
      res += filteredArr[0];
    }
  }
  return res;
};

console.log(catchTheWord(arr_str)); // Hactiv8
