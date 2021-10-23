// import * as firebase from "firebase/app";
// import 'firebase/auth';
// import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";

const devConfig = {
    apiKey: "AIzaSyDbAiNHPvCdQcMIGUnfNy6m-KgylGz3dBQ",
    authDomain: "react-movie-app-v1.firebaseapp.com",
    projectId: "react-movie-app-v1",
    storageBucket: "react-movie-app-v1.appspot.com",
    messagingSenderId: "553208156173",
    appId: "1:553208156173:web:bb11c05b024f3c8cb90544",
    measurementId: "G-QYL920ZYFS"
};

const prodConfig = {
    apiKey: process.env.PROD_API_KEY,
    authDomain: process.env.PROD_AUTH_DOMAIN,
    databaseURL: process.env.PROD_DATABASE_URL,
    projectId: process.env.PROD_PROJECT_ID,
    storageBucket: process.env.PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.PROD_MESSAGING_SENDER_ID,
    appId: process.env.PROD_APP_ID,
    measurementId: process.env.PROD_MEASUREMENT_ID
};

const firebaseConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
// const firebaseAnalytics = getAnalytics(firebaseApp);
// firebase.analytics();

export const userObserver = async (setCurrentUser) => {
    onAuthStateChanged(firebaseAuth, (user) => {
        console.log('firebase auth user OBSERVER: ', user);
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
};

export const signOut = async (setCurrentUser) => {
    firebaseAuth.signOut();
};

export const signIn = async (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredentials) => {
            console.log('userCred', userCredentials);
            // const user = userCredentials.user;
        })
        .catch((error) => {
            console.log('sign up error', error);
        })
}

export const signUp = async (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredentials) => {
            console.log('userCred', userCredentials);
            // const user = userCredentials.user;
        })
        .catch((error) => {
            console.log('sign up error', error);
        })
}


// export const fireStoreDb = firebase.firestore()
export default firebaseApp;
