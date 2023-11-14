const firebase = require('firebase-admin');
const config = require('./config');

const serviceAccount = require('./sds-manliveyoung-firebase-adminsdk-nio73-fc4f6456a9.json');

const db = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

module.exports = db;
