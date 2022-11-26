import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";

import SignUp from "../components/signup/SignUp";
import { createUserFromAuth } from "../utils/firebase/createUserFromAuth";
import { auth } from "../utils/firebase/firebase.utils";

import { signInWithGoogleRedirect } from "../utils/firebase/SignInMethods";

import Button from "../components/button-component/Button";
import FormInput from "../components/form-container/FormInput";
import "../styles/pages-style/signin.styles.scss";

const SignIn = () => {
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
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h1>Login</h1>
          <p>See your growth and get consulting support</p>

          <div className="third-party-signin">
            <Button
              title="Signin with Google"
              event={signInWithGoogleRedirect}
            />
          </div>
        </div>
        <div className="or-sign-with-email">
          <p>or Sign in with Email</p>
          <div className="border" />
        </div>
        <form>
          <FormInput
            formInputs={{
              label: "Email",
              type: "email",
              name: "email",
              required: true,
            }}
          />
          <FormInput
            formInputs={{
              label: "Password",
              type: "password",
              name: "password",
              required: true,
            }}
          />
          <Button type="primary" title="Login" />
        </form>
      </div>

      <SignUp />
    </div>
  );
};

export default SignIn;
