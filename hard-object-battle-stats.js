/*
===
Battle Stats
===
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.

Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut

Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh

Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]

console.log(battleStats(battle))

Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}

*/

const battleStats = (data) => {
  const res = {};
  for (let i = 0; i <= data.length - 1; i++) {
    //check if general exists
    if (res[data[i][0]]) {
      console.log("general exists");
      //check if number is positive
      if (data[i][1] > 0) {
        //check if menang exist
        if (res[data[i][0]]["Menang"]) {
          res[data[i][0]]["Menang"] += data[i][1];
        } else {
          res[data[i][0]]["Menang"] = data[i][1];
        }
      } else {
        if (res[data[i][0]]["Kalah"]) {
          res[data[i][0]]["Kalah"] += Math.abs(data[i][1]);
        } else {
          res[data[i][0]]["Kalah"] = Math.abs(data[i][1]);
        }
      }
    } else {
      res[data[i][0]] = {
        Kalah: 0,
        Menang: 0,
      };

      if (data[i][1] > 0) {
        res[data[i][0]]["Menang"] = Math.abs(data[i][1]);
      } else {
        res[data[i][0]]["Kalah"] = Math.abs(data[i][1]);
      }
    }
  }

  return res;
};

let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
];
console.log(battleStats(battle));
