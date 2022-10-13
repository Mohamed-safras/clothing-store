import React, { useEffect } from "react";

import {
  createUserFromAuth,
  signInWithGithubPopup,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logGithubUser = async () => {
    try {
      const { user } = await signInWithGithubPopup();
      console.log(user);
      await createUserFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser}> Signin With Google</button>
      <button onClick={logGithubUser}> Signin With GitHub</button>
    </div>
  );
};

export default SignIn;
