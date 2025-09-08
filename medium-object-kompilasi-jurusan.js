/*
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh

Contoh :

[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

output : 
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/

const arr = [
  ["Biologi", "Jonas"],
  ["Fisika", "Ulrich"],
  ["Akuntansi", "Hannah"],
  ["Biologi", "Barbosz"],
  ["Fisika", "Claudia"],
  ["Biologi", "Edmund"],
];

const kompilasi = (arr) => {
  const res = {};

  for (let i = 0; i <= arr.length - 1; i++) {
    if (res[arr[i][0]]) {
      res[arr[i][0]].push(arr[i][1]);
    } else {
      res[arr[i][0]] = [arr[i][1]];
    }
  }

  return res;
};

console.log(kompilasi(arr));
