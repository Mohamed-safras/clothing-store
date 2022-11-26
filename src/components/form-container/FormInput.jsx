import React from "react";
import "../form-container/FormInput.styles.scss";
const FormInput = ({ formInputs }) => {
  return (
    <div className="group">
      <input className="form-input" {...formInputs} />
      <label htmlFor={formInputs.type} className="form-input-label">
        {formInputs.label}
      </label>
    </div>
  );
};

export default FormInput;
