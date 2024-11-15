// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi9hmr4vHPg0OPXXa4Csv3dQtMb-lQqKk",
  authDomain: "gejet-sop.firebaseapp.com",
  projectId: "gejet-sop",
  storageBucket: "gejet-sop.firebasestorage.app",
  messagingSenderId: "337190767506",
  appId: "1:337190767506:web:a41a369b0dcfa16b930f4b",
  measurementId: "G-9HBVZ08ZGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);