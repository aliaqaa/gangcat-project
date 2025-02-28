import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
  // Check if the JWT cookie exists
  const jwt = Cookies.get('jwt'); // Replace 'jwt' with your cookie name

  // If the JWT exists, render the child routes (Outlet)
  // Otherwise, redirect to the authentication page
  return jwt ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;