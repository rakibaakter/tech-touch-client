// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaTRJuoOurL_brMfNH1S6T_waEL0dRDo4",
  authDomain: "tech-touch-5e4de.firebaseapp.com",
  projectId: "tech-touch-5e4de",
  storageBucket: "tech-touch-5e4de.appspot.com",
  messagingSenderId: "446724829397",
  appId: "1:446724829397:web:61cde0e76b1e688268b25c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
