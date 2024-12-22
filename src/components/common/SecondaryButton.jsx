import React from "react";

const SecondaryButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} secondary-button`}>
      {children}
    </button>
  );
};

export default SecondaryButton;
