import { getRedirectResult } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/google.svg";
import Logo from "../assets/logo.png";
import Button from "../components/button-component/Button";
import FormInput from "../components/form-container/FormInput";
import { UserContext } from "../context/user.context";

import "../styles/pages-style/signin-signup.styles.scss";
import {
  signAuthInWithEmailAndPassword,
  signInWithGoogleRedirect,
} from "../utils/firebase/AuthMethods";
import { createUserFromAuth } from "../utils/firebase/createUserFromAuth";
import { auth } from "../utils/firebase/firebase.utils";
import useHandlers from "../utils/helpers/handlechange";

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const initialFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const navigator = useNavigate();
  const {
    formField,
    handleChange,
    togglePassword,
    isPasswordShown,
    clearFields,
  } = useHandlers(initialFormFields);

  const { email, password } = formField;

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signAuthInWithEmailAndPassword(email, password);
      console.log(user);
      setCurrentUser(user);

      clearFields();
      navigator("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          console.log("invalid email or password");
          break;
        case "auth.user-not-found":
          console.log("user not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  useEffect(() => {
    const redirect = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const { user } = response;
          await createUserFromAuth(user);

          setCurrentUser(user);

          navigator("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    redirect();
  }, [navigator, setCurrentUser]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="crown-logo" />
        </div>
        <div className="signup-signin-container">
          <div className="signup-signin-header">
            <h2>Let's sign you in.</h2>
            <h5>You've been missed!</h5>
          </div>
          <form onSubmit={signIn}>
            <FormInput
              label="Email"
              Icon1={AlternateEmailOutlinedIcon}
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
              isPasswordShown={isPasswordShown}
              togglePassword={togglePassword}
              Icon1={VisibilityIcon}
              Icon2={VisibilityOffIcon}
              formInputs={{
                onChange: handleChange,
                value: formField.password,
                type: !isPasswordShown ? "password" : "text",
                name: "password",
                required: true,
              }}
            />
            <Button type="submit" style_type="primary" title="Login" />
          </form>
          <div className="or-container">
            <p>or</p>
            <div className="border" />
          </div>

          <div className="third-party-signin">
            <Button
              type="button"
              Icon={GoogleIcon}
              title="Signin with Google"
              event={signInWithGoogleRedirect}
            />
          </div>
        </div>
        <div className="link-container">
          <p>Not registed yet ? </p>
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
