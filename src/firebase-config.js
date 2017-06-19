  import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8pM4p79-vRDepfpHGOfN6HPpfcO444z4",
    authDomain: "fir-jest-a9ff5.firebaseapp.com",
    databaseURL: "https://fir-jest-a9ff5.firebaseio.com",
    projectId: "fir-jest-a9ff5",
    storageBucket: "fir-jest-a9ff5.appspot.com",
    messagingSenderId: "772966687313"
  };
  firebase.initializeApp(config);

  firebase.storage();