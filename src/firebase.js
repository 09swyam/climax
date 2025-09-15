// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ76YGYYTSDCJtfnJy-z3ASeR0hfDNepo",
  authDomain: "climax-5dd7c.firebaseapp.com",
  projectId: "climax-5dd7c",
  storageBucket: "climax-5dd7c.appspot.com", // ✅ fixed
  messagingSenderId: "881353516138",
  appId: "1:881353516138:web:a59c3add9295cca1581613",
  measurementId: "G-JPP4WJPS7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
