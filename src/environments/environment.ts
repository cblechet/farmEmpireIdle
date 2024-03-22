// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  apiKey: "AIzaSyA7WdWnwiIXjdipIqZVIdQAmT6y4tolPLQ",
  authDomain: "farm-empire-idle.firebaseapp.com",
  databaseURL: "https://farm-empire-idle-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "farm-empire-idle",
  storageBucket: "farm-empire-idle.appspot.com",
  messagingSenderId: "946984249304",
  appId: "1:946984249304:web:078ef9b9b727ae3dd1b4ad",
  measurementId: "G-KMXJ85EQ1H"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);