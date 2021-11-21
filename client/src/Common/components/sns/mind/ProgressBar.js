import React from 'react';

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: '1.0rem',
    width: '30.2rem',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: '5rem'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    background: ' #004611',
    borderRadius: '20px',
    transition: '1s ease 0.005s'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;