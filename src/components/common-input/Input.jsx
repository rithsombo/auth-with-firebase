import React from "react";

const Input = ({ type, placeholder, value, onChange, className, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={
        className ||
        "w-full block px-5 py-2 mt-2 text-white rounded-lg outline-none"
      }
    />
  );
};

export default Input;
