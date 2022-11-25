import React from "react";
import "../form-container/FormInput.styles.scss";
const FormInput = ({ formInputs }) => {
  return (
    <div className="form-input-container">
      <label>{formInputs.label}</label>
      <input {...formInputs} />
    </div>
  );
};

export default FormInput;
