import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";
import "../form-container/FormInput.styles.scss";
const FormInput = ({ label, isPasswordShown, togglePassword, formInputs }) => {
  return (
    <div className="group">
      <input className="form-input" {...formInputs} />
      {formInputs.name === "password" ||
      formInputs.name === "confirmPassword" ? (
        isPasswordShown ? (
          <VisibilityIcon
            onClick={togglePassword}
            className="eye-icon"
            sx={{ fontSize: 20, color: "#a1a0a5" }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={togglePassword}
            className="eye-icon"
            sx={{ fontSize: 20, color: "#a1a0a5" }}
          />
        )
      ) : null}
      {label && (
        <label
          className={`${formInputs.value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
