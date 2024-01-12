// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAyfX8S8ed9jouXcRW324Z82uFWustwQXM",
  authDomain: "artshowcase-a44c2.firebaseapp.com",
  projectId: "artshowcase-a44c2",
  storageBucket: "artshowcase-a44c2.appspot.com",
  messagingSenderId: "223047609697",
  appId: "1:223047609697:web:4c3a9c7378aa90f4892920",
  measurementId: "G-505LZHN40B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);