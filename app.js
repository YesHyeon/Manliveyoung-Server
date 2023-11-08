const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({ a: '1123' });
  console.log('get 요청 들어옴');
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
