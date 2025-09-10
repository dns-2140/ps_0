/*
===
Rekap Jurusan
===

Diberikan array of object dari data di TU kampus :
[
  {
    'nama': 'Adi',
    'jurusan': 'TI',
    'nilai': 80
  },
  {
    'nama': 'Bintang',
    'jurusan': 'Biologi',
    'nilai': 70
  },
  {
    'nama': 'Nanda',
    'jurusan': 'TI',
    'nilai': 90
  },
  {
    'nama': 'Rama',
    'jurusan': 'Elektro',
    'nilai': 80
  },
  {
    'nama': 'Reggi',
    'jurusan': 'TI',
    'nilai': 100
  },
  {
    'nama': 'Windy',
    'jurusan': 'Biologi',
    'nilai': 100
  },
]

Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}

*/

const solution = (arr) => {
  let res = {};
  let jurusan = arr.map((el) => {
    if (res[el.jurusan]) {
      res[el.jurusan].mahasiswa.push(el.nama);
      res[el.jurusan]["rata-rata"] += el.nilai;
    } else {
      res[el.jurusan] = { mahasiswa: [], "rata-rata": 0 };
      res[el.jurusan].mahasiswa.push(el.nama);
      res[el.jurusan]["rata-rata"] += el.nilai;
    }
  });
  for (let jurusan in res) {
    res[jurusan]["rata-rata"] =
      res[jurusan]["rata-rata"] / res[jurusan]["mahasiswa"].length;
  }
  return res;
};

const myArr = [
  {
    nama: "Adi",
    jurusan: "TI",
    nilai: 80,
  },
  {
    nama: "Bintang",
    jurusan: "Biologi",
    nilai: 70,
  },
  {
    nama: "Nanda",
    jurusan: "TI",
    nilai: 90,
  },
  {
    nama: "Rama",
    jurusan: "Elektro",
    nilai: 80,
  },
  {
    nama: "Reggi",
    jurusan: "TI",
    nilai: 100,
  },
  {
    nama: "Windy",
    jurusan: "Biologi",
    nilai: 100,
  },
];

console.log(solution(myArr));
