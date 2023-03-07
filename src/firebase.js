import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

let firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyB2T1Xcg02elICjN3vY8uqMJbG2RdiSAj0",
    authDomain: "gymate-c569f.firebaseapp.com",
    projectId: "gymate-c569f",
    storageBucket: "gymate-c569f.appspot.com",
    messagingSenderId: "638375556280",
    appId: "1:638375556280:web:1b1397d57de0795a68304d"
})

let db = firebaseapp.firestore()

export {db}