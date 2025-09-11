// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ76YGYYTSDCJtfnJy-z3ASeR0hfDNepo",
  authDomain: "climax-5dd7c.firebaseapp.com",
  projectId: "climax-5dd7c",
  storageBucket: "climax-5dd7c.firebasestorage.app",
  messagingSenderId: "881353516138",
  appId: "1:881353516138:web:a59c3add9295cca1581613",
  measurementId: "G-JPP4WJPS7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);