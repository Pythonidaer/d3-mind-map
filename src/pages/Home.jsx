import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  return <Navigate replace to="/about" />;
};

export default Home;