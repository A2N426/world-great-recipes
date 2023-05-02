// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4eU_V4eix3AsNlHu5QnT1K13SMv3iBM",
  authDomain: "chef-recipes-hunter.firebaseapp.com",
  projectId: "chef-recipes-hunter",
  storageBucket: "chef-recipes-hunter.appspot.com",
  messagingSenderId: "750062578988",
  appId: "1:750062578988:web:c7e4cf50059312982f5089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;