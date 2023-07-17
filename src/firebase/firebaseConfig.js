// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd_ECa0uEda2NjSBj89ZsIj50zumgvvdw",
  authDomain: "ecommercedb-c8b02.firebaseapp.com",
  projectId: "ecommercedb-c8b02",
  storageBucket: "ecommercedb-c8b02.appspot.com",
  messagingSenderId: "1013024645261",
  appId: "1:1013024645261:web:427425051e14001d1882c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
