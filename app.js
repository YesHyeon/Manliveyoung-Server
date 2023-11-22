import express from 'express';
import database from './routes/config.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({ a: '1123' });
  console.log('get 요청 들어옴');

  var ref = database.ref('건성cosmetics');
  var doc = ref.get();
  print('doc :', doc);

  //Firebase 연동
  database
    .ref('cosmetics')
    .doc('11')
    .set(
      {
        image: 'assets/images/skin1.jpg',
        name: '아쿠아 오아시스 포맨 토너',
        comment: '자극적인 성분이 없어서 좋아요',
        star: '3.94',
        review: '100',
        type: 'skin',
      },
      function (error) {
        if (error) console.error(error);
        else console.log('success save !!');
      }
    );
  return res.json({ firebase: true });
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
