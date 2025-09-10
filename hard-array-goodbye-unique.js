/*
==
GOODBYE UNIQUE
==

RELEASE 1
-
Buatlah fungsi myIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index posisi number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AWAL array ke AKHIR array

Contoh :
let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myIndexOf(arr, 2)) // 1
console.log(myIndexOf(arr, 1)) // 0
console.log(myIndexOf(arr, 3)) // 2


RELEASE 2
-
Buatlah fungsi myLastIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index posisi number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AKHIR array ke AWAL array

Contoh :
let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myLastIndexOf(arr, 2)) // 8
console.log(myLastIndexOf(arr, 1)) // 9
console.log(myLastIndexOf(arr, 3)) // 7


RELEASE 3
-
Buatlah fungsi goodbyeUnique dengan parameter input berupa array. Fungsi ini akan menghapus semua angka yang unik ( hanya ada 1 di dalam array ) tanpa merubah posisi dari elemen-elemen dalam array. Fungsi akan mengembalikan array yang sudah diolah.
HINT : kalian bisa memanfaatkan fungsi-fungsi yang sudah kalian buat di RELEASE sebelumnya

Contoh :
console.log(goodbyeUnique([1, 2, 3, 4, 1, 2, 3])) // [1, 2, 3, 1, 2, 3]
console.log(goodbyeUnique([5, 4, 3])) // []
console.log(goodbyeUnique([3, 5, 3, 5, 3])) // [3, 5, 3, 5, 3]
*/

const myIndexOf = (arr, el) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
};

// let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1];
// console.log(myIndexOf(arr, 2)); // 1
// console.log(myIndexOf(arr, 1)); // 0
// console.log(myIndexOf(arr, 3)); // 2

// const myLastIndexOf = (arr, el) => {
//   let currIndex;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === el) {
//       currIndex = i;
//     }
//   }
//   return currIndex;
// };

// console.log(myLastIndexOf(arr, 2)); // 8
// console.log(myLastIndexOf(arr, 1)); // 9
// console.log(myLastIndexOf(arr, 3)); // 7

const getFrequencies = (arr, res = {}) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    res[arr[i]] ? res[arr[i]]++ : (res[arr[i]] = 1);
  }
  return res;
};

const goodbyeUnique = (arr) => {
  const frequency = getFrequencies(arr);
  let uniqueElement = [];
  for (let key in frequency) {
    if (frequency[key] === 1) {
      uniqueElement.push(key);
    }
  }

  if (uniqueElement.length === 0) {
    return arr;
  }

  if (uniqueElement.length > 0) {
    for (let i = 0; i <= uniqueElement.length - 1; i++) {
      const uniqueIndex = myIndexOf(arr, Number(uniqueElement[i]));
      arr.splice(uniqueIndex, 1);
    }
    return arr;
  }

  return res;
};

console.log(goodbyeUnique([1, 2, 3, 4, 1, 2, 3])); // [1, 2, 3, 1, 2, 3]
console.log(goodbyeUnique([5, 4, 3])); // []
console.log(goodbyeUnique([3, 5, 3, 5, 3])); // [3, 5, 3, 5, 3]
