import React from "react";

const Button = ({ children, txtOnly, className, ...props }) => {
  let classname = txtOnly ? "text-button" : "button";
  classname = classname + " " + className;
  return (
    <button className={classname} {...props}>
      {children}
    </button>
  );
};

export default Button;
