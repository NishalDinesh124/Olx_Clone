import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgRyQVxoaK1DnrlvTfOoKqVIdfnEbbnPo",
    authDomain: "olx-clone-f3789.firebaseapp.com",
    projectId: "olx-clone-f3789",
    storageBucket: "olx-clone-f3789.appspot.com",
    messagingSenderId: "105286644328",
    appId: "1:105286644328:web:5abbd323fb588a335e01dd",
    measurementId: "G-X1K3GQMX7H"
  };

  export default firebase.initializeApp(firebaseConfig);