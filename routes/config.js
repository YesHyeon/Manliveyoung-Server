import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIlT2kviPoFpO1jrbxzo4kF-xEcdlIXok',
  authDomain: 'sds-manliveyoung.firebaseapp.com',
  projectId: 'sds-manliveyoung',
  storageBucket: 'sds-manliveyoung.appspot.com',
  messagingSenderId: '25077138150',
  appId: '1:25077138150:web:6b9e81395215991235f127',
  measurementId: 'G-06DF6YH9DQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let database = firebase.database();

export default database;
// module.exports = database;
