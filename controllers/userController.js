'use strict';
const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    const data = req.body;

    console.log('유저 회원가입 데이터 : ', data);

    // const createUser = await firebase
    //   .auth()
    //   .signInEmailAndPassword(data.id, data.password)
    //   .then(console.log('성공'))
    //   .catch(console.log('실패'));

    const user = await firestore.collection('cosmetics').doc('22').set(data);

    console.log('완료!', user);

    res.send('Record saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addUser,
};
