import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../api/authApi";

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
