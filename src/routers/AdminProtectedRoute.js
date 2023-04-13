import React from "react";
import useAuth from "../Custom Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    (currentUser.uid = "lHV1TFWEuFMObMj9THXHD2Eq9053" ? (
      children
    ) : (
      <Navigate to="/" />
    ))
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminProtectedRoute;
