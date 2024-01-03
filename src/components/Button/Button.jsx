import React from 'react';

export const Button = ({ children, onClick }) => {
  console.log(onClick);
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
