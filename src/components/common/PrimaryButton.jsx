import React from "react";

const PrimaryButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} primary-button`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
