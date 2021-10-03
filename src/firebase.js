import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDIciinBbop2bUDm9i4JUqO_Lwn0I66oWI",
    authDomain: "auth-development-bc93a.firebaseapp.com",
    projectId: "auth-development-bc93a",
    storageBucket: "auth-development-bc93a.appspot.com",
    messagingSenderId: "653381063616",
    appId: "1:653381063616:web:f23b045c277952dc04ee25"
  };
  
const app =firebase.initializeApp(firebaseConfig);

export default app;