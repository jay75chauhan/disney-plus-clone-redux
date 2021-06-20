import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyBf-BVI70hg9-cyxb_WL3z2TL03rCSlpOc",
  // authDomain: "disney-plus-redux-clone.firebaseapp.com",
  // projectId: "disney-plus-redux-clone",
  // storageBucket: "disney-plus-redux-clone.appspot.com",
  // messagingSenderId: "500066407662",
  // appId: "1:500066407662:web:7e5668584719a305a60fff",
  /////////////////////////
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
