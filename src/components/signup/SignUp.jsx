import React, { useState } from "react";
import FormInput from "../form-container/FormInput";

import { createUserFromAuth } from "../../utils/firebase/createUserFromAuth";

import { signInWithEmailPassword } from "../../utils/firebase/SignInMethods";

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
    <React.Fragment>
      {loading && <h2>Loading...</h2>}
      {status.error && <h2>{status.error}</h2>}
      {status.success && <h2>{status.success}</h2>}
      <form style={{ padding: "40px" }} onSubmit={signUpNewUser}>
        <FormInput
          formInputs={{
            onChange: handleChange,
            value: displayName,
            type: "text",
            placeholder: "Display Name",
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
            placeholder: "Email",
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
            placeholder: "Password",
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
            placeholder: "Confirm Password",
            name: "confirmPassword",
            label: "Confirm Password",
            required: true,
          }}
        />

        <button>signup</button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
