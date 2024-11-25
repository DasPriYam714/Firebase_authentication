// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDctnvZDdljyzINavnoZPjRMxhC9-u5F_k",
  authDomain: "fir-auth-c14fe.firebaseapp.com",
  projectId: "fir-auth-c14fe",
  storageBucket: "fir-auth-c14fe.firebasestorage.app",
  messagingSenderId: "859029998415",
  appId: "1:859029998415:web:a922fe0efbbea5d8b5933a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;