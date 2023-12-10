'use strict';
const firebase = require('../db');
const Cosmetic = require('../models/cosmetic');
const firestore = firebase.firestore();

const addCosmetic = async (req, res, next) => {
  const type = req.body['type'];
  const engcategory = [
    'skin',
    'lotion',
    'essense',
    'waterCream',
    'mask',
    'shaving',
  ];
  const cosmeticData = {};
  let setLoading = true;

  try {
    // 서버에서 타입별로 제품 가져와서 객체 형식으로 저장하기.
    for (let i = 0; i < engcategory.length; i++) {
      const item = [];

      const querySnapshot = await firestore
        .collection(`${type}cosmetics`)
        .where('type', '==', engcategory[i])
        .get();

      querySnapshot.forEach((docSnapshot) => {
        item.push(docSnapshot.data());
      });

      item.sort((a, b) => parseFloat(b['star']) - parseFloat(a['star']));

      cosmeticData[`${engcategory[i]}`] = item;
    }

    console.log(cosmeticData);

    setLoading = false;
    res.send(cosmeticData);
  } catch (error) {
    console.error('Error:', error);
  }

  return cosmeticData;
};

module.exports = {
  addCosmetic,
};
