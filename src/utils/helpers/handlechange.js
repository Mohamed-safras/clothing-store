import { useState } from "react";

const useHandlers = (initialFormFields) => {
  const [formField, setFormField] = useState(initialFormFields);

  const clearFields = () => {
    setFormField(initialFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField(() => ({ ...formField, [name]: value }));
  };
  return {
    formField,
    clearFields,
    handleChange,
  };
};

export default useHandlers;
