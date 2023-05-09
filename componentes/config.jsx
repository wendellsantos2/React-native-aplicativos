
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfnPCc4RVIkcKg1x-F0C1V8q9reLmtwU",
  authDomain: "tinder-933a9.firebaseapp.com",
  projectId: "tinder-933a9",
  storageBucket: "tinder-933a9.appspot.com",
  messagingSenderId: "21211045541",
  appId: "1:21211045541:web:8641a20f1de1b6d9a6774c",
  measurementId: "G-HNV7MJ4J2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app); 