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
      console.log(user.uid, user.email);
      createUserFromAuth(user);
    } catch (error) {}
  };

  const logGithubUser = async () => {
    try {
      const response = await signInWithGithubPopup();
      console.log(response);
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={logGoogleUser}> Signin With Google</button>
      <button onClick={logGithubUser}> Signin With GitHub</button>
    </div>
  );
};

export default SignIn;
