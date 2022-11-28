import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import useHandlers from "../utils/firebase/helpers/handlechange";

import { createUserFromAuth } from "../utils/firebase/createUserFromAuth";
import { auth } from "../utils/firebase/firebase.utils";

import { signInWithGoogleRedirect } from "../utils/firebase/SignInMethods";

import { Link } from "react-router-dom";
import Button from "../components/button-component/Button";
import FormInput from "../components/form-container/FormInput";
import "../styles/pages-style/signin-signup.styles.scss";

const initialFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { formField, handleChange, clearFields } =
    useHandlers(initialFormFields);

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
      <div className="signup-signin-container">
        <div className="sign-in-header">
          <h1>Login</h1>
          <p>See your growth and get consulting support</p>
        </div>
        <form>
          <FormInput
            label="Email"
            formInputs={{
              onChange: handleChange,
              value: formField.email,
              type: "email",
              name: "email",
              required: true,
            }}
          />
          <FormInput
            label="Password"
            formInputs={{
              onChange: handleChange,
              value: formField.password,
              type: "password",
              name: "password",
              required: true,
            }}
          />
          <Button type="primary" title="Login" />
        </form>
        <div className="or-container">
          <p>or</p>
          <div className="border" />
        </div>

        <div className="third-party-signin">
          <Button title="Signin with Google" event={signInWithGoogleRedirect} />
        </div>
      </div>
      <div className="link-container">
        <p>Not registed yet ? </p>
        <Link className="link" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
