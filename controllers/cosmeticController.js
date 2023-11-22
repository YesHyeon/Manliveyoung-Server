'use strict';
const firebase = require('../db');
const Cosmetic = require('../models/cosmetic');
const firestore = firebase.firestore();

const addCosmetic = async (req, res, next) => {
  try {
    const data = req.body;
    const cosmetic = await firestore.collection('cosmetics');
    const a = cosmetic.get();
    res.send('Record saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addCosmetic,
};
