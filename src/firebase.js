import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBX-EMm5zw0x-nnGIhGN8VUTuRKPQW4FEY",
    authDomain: "whatsapp-clone-8390f.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8390f.firebaseio.com",
    projectId: "whatsapp-clone-8390f",
    storageBucket: "whatsapp-clone-8390f.appspot.com",
    messagingSenderId: "735448044472",
    appId: "1:735448044472:web:ca195a6b8c08913659f54d",
    measurementId: "G-L1YMJT4DWB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider};
  export default db;