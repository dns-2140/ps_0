/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
*/

const getFrequencies = (arr, res = {}) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    res[arr[i]] ? res[arr[i]]++ : (res[arr[i]] = 1);
  }
  return res;
};

console.log(getFrequencies(["A", "B", "A", "A", "A"])); // { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])); // { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false])); // { true: 2, false: 3 }
console.log(getFrequencies([])); // {}
