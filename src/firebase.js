import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBf-BVI70hg9-cyxb_WL3z2TL03rCSlpOc",
  authDomain: "disney-plus-redux-clone.firebaseapp.com",
  databaseURL:
    "https://disney-plus-redux-clone-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disney-plus-redux-clone",
  storageBucket: "disney-plus-redux-clone.appspot.com",
  messagingSenderId: "500066407662",
  appId: "1:500066407662:web:7e5668584719a305a60fff",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
