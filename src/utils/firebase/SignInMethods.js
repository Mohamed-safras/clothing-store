import { auth, githubProvider, googleProvider } from "../firebase.utils";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

// google provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// sign in with popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// github provider

githubProvider.addScope("repo");
githubProvider.setCustomParameters({
  allow_signup: "false",
});

export const signInWithGithubPopup = () =>
  signInWithPopup(auth, githubProvider);

// Email auth

export const signInWithEmailPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// sign in with redirect

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
