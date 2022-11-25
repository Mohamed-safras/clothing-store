import React, { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";
import SignUp from "../components/signup/SignUp";
import { createUserFromAuth } from "../utils/firebase/createUserFromAuth";
import { auth } from "../utils/firebase/firebase.utils";

import {
  signInWithGithubPopup,
  signInWithGoogleRedirect,
} from "../utils/firebase/SignInMethods";

import FormInput from "../components/form-container/FormInput";
import "../styles/pages-style/signin.styles.scss";

const SignIn = () => {
  const logInWithGithub = async () => {
    try {
      const { user } = await signInWithGithubPopup();

      await createUserFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const redirect = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const { user } = response;
          await createUserFromAuth(user);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    redirect();
  }, []);

  return (
    <div className="container">
      <div className="signin">
        <form>
          <FormInput formInputs={{ label: "Email" }} />
          <FormInput formInputs={{ label: "Password" }} />
          <button>Login</button>
        </form>

        <div className="third-party-signin">
          <button
            onClick={() => {
              signInWithGoogleRedirect();
            }}
          >
            Signin With Google
          </button>
          <button onClick={logInWithGithub}> Signin With GitHub</button>
        </div>
      </div>

      <SignUp />
    </div>
  );
};

export default SignIn;
