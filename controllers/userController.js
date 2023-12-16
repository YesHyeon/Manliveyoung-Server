'use strict';
const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    const data = req.body;

    const user = await firestore.collection('users').doc().set(data);

    const result = await firestore
      .collection('cosmetics')
      .get()
      .then((결과) => {
        결과.forEach((doc) => {
          console.log('결과 :', doc.data());
        });
      });

    console.log('회원가입이 완료되었습니다', user);

    res.status(200).send('Record saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addUser,
};
