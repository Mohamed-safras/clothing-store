// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPHN4tYpYc_UbYdcXqLksrIGV8tsmjjyI",
  authDomain: "clothing-store-e2c36.firebaseapp.com",
  projectId: "clothing-store-e2c36",
  storageBucket: "clothing-store-e2c36.appspot.com",
  messagingSenderId: "908625433309",
  appId: "1:908625433309:web:da1b3dfe3d4b04459cc134",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

// google auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// github auth
const githubProvider = new GithubAuthProvider();

githubProvider.addScope("repo");
githubProvider.setCustomParameters({
  allow_signup: "false",
});

export const signInWithGithubPopup = () =>
  signInWithPopup(auth, githubProvider);

// database

export const db = getFirestore();

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
