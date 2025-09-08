/*
===
URL Parser
===
Buatlah sebuah fungsi yang bernama urlParser, yang akan menerima input sebuah URL. Format URL adalah 'protocol://domain/username. Kemudian fungsi ini akan menghasilkan objek yang merupakan hasil parser dari URL yang di input. Jika username kosong, maka keluarkan tulisan : "not available" pada key username

Contoh ada pada driver code di bawah :
*/

const urlParser = (str) => {
  const res = {};
  const protocol = str.split("https");

  if (protocol.length > 1) {
    res.protocol = "https";
    const slash = protocol[1].split("://");
    const domain = slash[1].split("/");
    res.domain = domain[0];
    res.usernane = domain[1];
  } else {
    res.protocol = "http";
    const slash = protocol[0].split("://");
    const domain = slash[1].split("/");
    res.domain = domain[0];
    if (domain[1]) {
      res.user = domain[1];
    } else {
      res.user = "not available";
    }
  }
  return res;
};

console.log(urlParser("https://facebook.com/foo"));
// {
//   protocol: 'https',
//   domain: 'facebook.com',
//   username: 'foo'
// }

console.log(urlParser("http://imgur.co.id/"));
// {
//   protocol: 'http',
//   domain: 'imgur.co.id',
//   username: 'not available'
// }
