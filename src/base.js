import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4MEhB8hcd-rb8jYi3Y3Bckqx-hesn9M4",
    authDomain: "catch-of-the-day-47a50.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-47a50.firebaseio.com",
      
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;