import React, { useState } from "react";
import FormInput from "../form-container/FormInput";

import { createUserFromAuth } from "../../utils/firebase/createUserFromAuth";

import { signInWithEmailPassword } from "../../utils/firebase/SignInMethods";
import Button from "../button-component/Button";
import "./sign-up.styles.scss";
const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(initialFormFields);

  const clearFields = () => {
    setFormField(initialFormFields);
  };

  const [status, setStatus] = useState({
    error: "",
    success: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField(() => ({ ...formField, [name]: value }));
  };

  const signUpNewUser = async (e) => {
    e.preventDefault();
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
      const { user } = await signInWithEmailPassword(email, password);
      await createUserFromAuth(user, { displayName });
      clearFields();
      setStatus(() => ({
        ...status,
        success: "account is created successfully",
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setStatus(() => ({
        ...status,
        error: error.code,
      }));
    }
  };

  const { displayName, email, password, confirmPassword } = formField;

  return (
    <div className="sign-up-container">
      <h1>No registed yet?</h1>
      <p>Create new account</p>
      <form onSubmit={signUpNewUser}>
        {loading && <p>Loading...</p>}
        {status.error && <p>{status.error}</p>}
        {status.success && <p>{status.success}</p>}
        <FormInput
          formInputs={{
            onChange: handleChange,
            value: displayName,
            type: "text",
            name: "displayName",
            label: "Display Name",
            required: true,
          }}
        />
        <FormInput
          formInputs={{
            onChange: handleChange,
            value: email,
            type: "email",
            name: "email",
            label: "Email",
            required: true,
          }}
        />
        <FormInput
          formInputs={{
            onChange: handleChange,
            value: password,
            type: "password",
            name: "password",
            label: "Password",
            required: true,
          }}
        />
        <FormInput
          formInputs={{
            onChange: handleChange,
            value: confirmPassword,
            type: "password",
            name: "confirmPassword",
            label: "Confirm Password",
            required: true,
          }}
        />

        <Button title="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
