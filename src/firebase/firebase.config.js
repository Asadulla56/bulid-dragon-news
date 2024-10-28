// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbcmBN4Osg0s-O5tQCBcsGmee3dyiCUJ4",
  authDomain: "bulid-dragon-news.firebaseapp.com",
  projectId: "bulid-dragon-news",
  storageBucket: "bulid-dragon-news.appspot.com",
  messagingSenderId: "471185818872",
  appId: "1:471185818872:web:d5e23d7a42f54ce7d0a70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;