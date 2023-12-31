const express = require('express');
const { addCosmetic } = require('../controllers/cosmeticController');

const router = express.Router();

router.post('/cosmetic', addCosmetic);

module.exports = {
  routes: router,
};
