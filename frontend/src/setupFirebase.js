import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/analytics';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCa2k3GG2PSzfrIHoS9ESEue4eo2gB_8WA",
    authDomain: "mobileshop-a37e2.firebaseapp.com",
    databaseURL: "https://mobileshop-a37e2-default-rtdb.firebaseio.com",
    projectId: "mobileshop-a37e2",
    storageBucket: "mobileshop-a37e2.appspot.com",
    messagingSenderId: "456081610942",
    appId: "1:456081610942:web:3e91bc7013c1866048e6ef",
    measurementId: "G-HE919095YF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

