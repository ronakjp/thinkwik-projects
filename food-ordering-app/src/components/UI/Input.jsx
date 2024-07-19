import React from "react";
import { set } from "react-hook-form";

const Input = ({
  id,
  label,
  register,
  validationRule,
  name,
  errors,
  ...props
}) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(name, validationRule)} {...props} />
      {errors[name] && <span>{errors[name].message}</span>}
    </p>
  );
};

export default Input;
