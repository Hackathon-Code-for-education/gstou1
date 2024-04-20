import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    // Если токена нет, перенаправляем на страницу входа
    return <Navigate to="/loginForm" replace />;
  }

  return children;
};

export default ProtectedRoute;