import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhhZSgfo7E63lb2Pzsm182kAjbTRnnOSY",
  authDomain: "fir-frontend-c7dd7.firebaseapp.com",
  projectId: "fir-frontend-c7dd7",
  storageBucket: "fir-frontend-c7dd7.appspot.com",
  messagingSenderId: "151402956716",
  appId: "1:151402956716:web:2fa4480aa81a039c549c09",
  measurementId: "G-06BTHK68FJ"
};

// Initialize Firebase
export const app1 = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);