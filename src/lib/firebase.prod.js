import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// config
const config = {
  apiKey: '***************************',
  authDomain: 'snippa-x.firebaseapp.com',
  databaseURL: 'https://snippa-x.firebaseio.com',
  projectId: 'snippa-x',
  storageBucket: 'snippa-x.appspot.com',
  messagingSenderId: '*****************',
  appId: '*********************',
};

const firebase = Firebase.initializeApp(config);

// seed the database
// seedDatabase(firebase)

export { firebase };