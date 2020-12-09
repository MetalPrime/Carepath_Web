  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCDLsGJOke2qA1e3qbyC8jxxpvizUBsw-A",
    authDomain: "carepath-805ff.firebaseapp.com",
    databaseURL: "https://carepath-805ff-default-rtdb.firebaseio.com",
    projectId: "carepath-805ff",
    storageBucket: "carepath-805ff.appspot.com",
    messagingSenderId: "117197958415",
    appId: "1:117197958415:web:c0a5e071bc83992ad3227a",
    measurementId: "G-Y5123KME54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.database();
  const auth = firebase.auth();