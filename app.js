import express from 'express';
import database from './routes/config.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  var ref = database.ref('건성cosmetics');
  var doc = ref.get();

  return res.json({ firebase: true });
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
