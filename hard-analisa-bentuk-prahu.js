/*
Pada soal ini kalian diminta untuk menganalisa output
Console.log dilakukan langsung di dalam function, tidak perlu pakai return
Asumsi input bilangan dari 1 smp tak hingga
*/

function star(num) {
  // your code here
  let maxWidth;
  if (num === 1) {
    maxWidth = num + 2;
  } else {
    maxWidth = (1 + (num - 1) * 2) * 3;
  }

  for (let i = 1; i <= num * 2; i++) {
    let res = "";
    if (i === num + 1) {
      res += " ".repeat(maxWidth / 2);
    } else if (i > num + 1) {
      res += " ".repeat(maxWidth / 2 + (i - (num + 1)) * 2);
    } else {
      res += " ".repeat(maxWidth - i);
    }

    if (i === 1) {
      res += "*".repeat(i);
    } else if (i === num + 1) {
      res += "*".repeat(maxWidth);
    } else if (i > num + 1) {
      res += "*".repeat(maxWidth - (i - (num + 1)) * 4);
    } else if (i > 1) {
      res += "*".repeat(2 * i - 1);
    }

    console.log(res);
  }
}

star(1);
//  *
// ***

star(2);
//     *
//    ***
// *********
//   *****

star(3);
//        *
//       ***
//      *****
// ***************
//   ***********
//     *******

star(4);
//           *
//          ***
//         *****
//        *******
// *********************
//   *****************
//     *************
//       *********

star(5);
//              *
//             ***
//            *****
//           *******
//          *********
// ***************************
//   ***********************
//     *******************
//       ***************
//         ***********
