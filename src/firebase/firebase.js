import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDu1qNUnoarPVN8sHL6XrwhFDT7YJjcYO4",
    authDomain: "bara-sushi---groppa.firebaseapp.com",
    projectId: "bara-sushi---groppa",
    storageBucket: "bara-sushi---groppa.appspot.com",
    messagingSenderId: "198076763893",
    appId: "1:198076763893:web:c160247f440081cde93fbc"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
