const express = require('express');
const router = express.Router();

// config.js에서 export한 모듈을 다음과 같이 import 시킬 수 있다. (같은 디렉토리 위치)
const database = require('./config');

// localhost:3000/firebase/save 호출
router.get('/save', function (req, res) {
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

module.exports = router;
