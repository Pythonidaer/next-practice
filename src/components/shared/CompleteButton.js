'use client';
import React from 'react';

const CompleteButton = ({ onClick, children, disabled }) => {
  return (
    <button
      className="complete-btn"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children || 'Complete>'}
    </button>
  );
};

export default CompleteButton;
