import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      style={{
        marginTop: '64px', // Add space for fixed navbar
        padding: '20px',
        margin: 'auto',
        color: '#333333',
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      {children}
    </div>
  );
};

export default Container;