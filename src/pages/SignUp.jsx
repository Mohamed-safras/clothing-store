import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/google.svg";
import Logo from "../assets/logo.png";
import Button from "../components/button-component/Button";
import FormInput from "../components/form-container/FormInput";
import "../styles/pages-style/signin-signup.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect,
} from "../utils/firebase/AuthMethods";
import { createUserFromAuth } from "../utils/firebase/createUserFromAuth";
import useHandlers from "../utils/helpers/handlechange";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const {
    formField,
    handleChange,
    clearFields,
    togglePassword,
    isPasswordShown,
    isConfirmPasswordShown,
    toggleConfirmPassword,
  } = useHandlers(initialFormFields);

  const [status, setStatus] = useState({
    error: "",
    success: "",
  });

  const [loading, setLoading] = useState(false);
  const { displayName, email, password, confirmPassword } = formField;

  const signUpNewUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setStatus(() => ({
        ...status,
        error: "password and confirm password are do not match",
      }));
      setLoading(false);
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserFromAuth(user, { displayName });

      clearFields();

      setStatus(() => ({
        ...status,
        success: "account is created successfully",
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      clearFields();
      setStatus(() => ({
        ...status,
        error: error.code,
      }));
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="signup-signin-container">
          <div className="logo">
            <img src={Logo} alt="crown-logo" />
          </div>
          <div className="signup-signin-header">
            <h2>Not registed yet?</h2>
            <h5>Create new account</h5>
          </div>
          <form onSubmit={signUpNewUser}>
            <div className="message">{loading && <p>Loading...</p>}</div>
            <FormInput
              label="Display Name"
              formInputs={{
                onChange: handleChange,
                value: displayName,
                type: "text",
                name: "displayName",
                required: true,
              }}
            />
            <FormInput
              label="Email"
              formInputs={{
                onChange: handleChange,
                value: email,
                type: "email",
                name: "email",
                required: true,
              }}
            />
            <FormInput
              label="Password"
              togglePassword={togglePassword}
              isPasswordShown={isPasswordShown}
              formInputs={{
                onChange: handleChange,
                value: password,
                type: !isPasswordShown ? "password" : "text",
                name: "password",
                required: true,
              }}
            />
            <FormInput
              label="Confirm Password"
              togglePassword={toggleConfirmPassword}
              isPasswordShown={isConfirmPasswordShown}
              formInputs={{
                onChange: handleChange,
                value: confirmPassword,
                type: !isConfirmPasswordShown ? "password" : "text",
                name: "confirmPassword",
                required: true,
              }}
            />

            <Button type="submit" style_type="primary" title="Sign Up" />
          </form>
          <div className="or-container">
            <p>or</p>
            <div className="border" />
          </div>

          <div className="third-party">
            <Button
              Icon={GoogleIcon}
              title="Signin with Google"
              event={signInWithGoogleRedirect}
            />
          </div>
        </div>
        <div className="link-container">
          <p>Already a user? </p>
          <Link className="link" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
