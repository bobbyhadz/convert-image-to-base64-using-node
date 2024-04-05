// EXAMPLE 1 - How to convert an Image to base64 using Node.js

import fs from 'fs';

// 👇️ if you use CommonJS require()
// const fs = require('fs')

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString('base64');
}

const base64String = toBase64('./house.png');
console.log(base64String);

const withPrefix = 'data:image/png;base64,' + base64String;
console.log(withPrefix);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Image to base64 Asynchronously using Node.js

// import fs from 'fs/promises';

// // 👇️ if you use CommonJS require()
// // const fs = require('fs/promises')

// async function toBase64(filePath) {
//   try {
//     const result = await fs.readFile(filePath, {
//       encoding: 'base64',
//     });

//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// toBase64('./house.png').then(base64String => {
//   console.log(base64String);

//   const withPrefix = 'data:image/png;base64,' + base64String;
//   console.log(withPrefix);
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Image to base64 Asynchronously using callbacks

// import fs from 'fs';

// // 👇️ if you use CommonJS require()
// // const fs = require('fs')

// const filePath = './house.png';

// fs.readFile(
//   filePath,
//   {encoding: 'base64'},
//   (err, base64String) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(base64String);
//       const withPrefix = 'data:image/png;base64,' + base64String;
//       console.log(withPrefix);
//     }
//   },
// );

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Image URL to base64 in Node.js

// async function imageUrlToBase64(url) {
//   try {
//     const response = await fetch(url);

//     const blob = await response.arrayBuffer();

//     const contentType = response.headers.get('content-type');

//     const base64String = `data:${contentType};base64,${Buffer.from(
//       blob,
//     ).toString('base64')}`;

//     return base64String;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const imageUrl =
//   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

// imageUrlToBase64(imageUrl).then(base64String => {
//   console.log(base64String);
// });

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert an Image URL to base64 in Node.js using Axios

// import axios from 'axios';

// // 👇️ if you use CommonJS
// // const axios = require('axios');

// async function imageUrlToBase64(url) {
//   try {
//     const response = await axios.get(url, {
//       responseType: 'arraybuffer',
//     });

//     const contentType = response.headers['content-type'];

//     const base64String = `data:${contentType};base64,${Buffer.from(
//       response.data,
//     ).toString('base64')}`;

//     return base64String;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const imageUrl =
//   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

// imageUrlToBase64(imageUrl).then(base64String => {
//   console.log(base64String);
// });
