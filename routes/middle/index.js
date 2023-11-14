const admin = require('firebase-admin');

const serviceAccount = require('../../sds-manliveyoung-firebase-adminsdk-nio73-fc4f6456a9.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
