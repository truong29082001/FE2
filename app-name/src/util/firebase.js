import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLllvlWKmTrzvjceVXgHxZ6Xi3RFfDeOc",
    authDomain: "pj-fe2.firebaseapp.com",
    projectId: "pj-fe2",
    storageBucket: "pj-fe2.appspot.com",
    messagingSenderId: "890889821085",
    appId: "1:890889821085:web:c96b9fdeb80da439f2ed74",
    measurementId: "G-7RXQHC7QK5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();