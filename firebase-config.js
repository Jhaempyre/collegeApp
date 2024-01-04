// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {authDomain} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLPqHfqIPUwjKxM5H7A0ZKVrPp3mUovzU",
  authDomain: "collegeapp-9ff2f.firebaseapp.com",
  projectId: "collegeapp-9ff2f",
  storageBucket: "collegeapp-9ff2f.appspot.com",
  messagingSenderId: "249735962298",
  appId: "1:249735962298:web:a4ad373d3b20588db4ac83",
  measurementId: "G-JMR7R773F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);