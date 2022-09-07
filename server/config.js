const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCGMvcMImoHofmBA0ucuwql8lwJdrKKIJc",
  authDomain: "spacexdb-8df74.firebaseapp.com",
  projectId: "spacexdb-8df74",
  storageBucket: "spacexdb-8df74.appspot.com",
  messagingSenderId: "582789601618",
  appId: "1:582789601618:web:d562c3e1098d8731bd028b",
  measurementId: "G-WKJM8XKT8S",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Comments = db.collection("Comments");
module.exports = Comments;
