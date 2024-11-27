import React from "react";
import Input from "../common-input/Input";
const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
const Form = ({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) => {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;
    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <Input
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              });
            }}
          />
        );
        break;

      default:
        element = (
          <Input
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              });
            }}
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControl) =>
        renderFormElement(singleFormControl, formData)
      )}
      <button type="submit" className="mt-2">{buttonText || "Submit"}</button>
    </form>
  );
};

export default Form;
