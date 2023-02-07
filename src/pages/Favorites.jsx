import axios from "axios";
import React, { useEffect } from "react";
const Favorites = ({ predict, change }) => {
  /*const getName = () => {
    axios
      .get("http://localhost:8080/")
      .then((response) => console.log(response));
  };

  useEffect(() => {
    getName();
  }, []);
  */
  return (
    <div>
      <h1>Upload File in React js</h1>
      <input type="file" onChange={(e) => change(e)} name="img" />
      <button onClick={predict}>Submit</button>
    </div>
  );
};

export default Favorites;
