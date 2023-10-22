// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlr8fodXdPdJZ3YWm6V5sAuiauppvnyxI",
  authDomain: "king-bazar-ecommerce.firebaseapp.com",
  projectId: "king-bazar-ecommerce",
  storageBucket: "king-bazar-ecommerce.appspot.com",
  messagingSenderId: "935161000605",
  appId: "1:935161000605:web:56f995b481ea29e2afda74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;