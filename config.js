const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

assert(8080, 'PORT is required');
assert('localhost', 'PORT is required');

module.exports = {
  port: '8080',
  host: 'localhost',
  url: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyCIlT2kviPoFpO1jrbxzo4kF-xEcdlIXok',
    authDomain: 'sds-manliveyoung.firebaseapp.com',
    projectId: 'sds-manliveyoung',
    storageBucket: 'sds-manliveyoung.appspot.com',
    messagingSenderId: '25077138150',
    appId: '1:25077138150:web:6b9e81395215991235f127',
    measurementId: 'G-06DF6YH9DQ',
  },
};
