import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "../../../components/common/ErrorBoundary";
import { RouteObject, Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/login"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const OtpPage = lazy(() => import("../pages/Otp"));

function suspenseWrapper(
  Component: React.LazyExoticComponent<React.ComponentType>
) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

const authRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "login",
    element: suspenseWrapper(LoginPage),
  },
  {
    path: "register",
    element: suspenseWrapper(RegisterPage),
  },
  {
    path: "forgot-password",
    element: suspenseWrapper(ForgotPasswordPage),
  },
  {
    path: "otp",
    element: suspenseWrapper(OtpPage),
  },
];

export default authRoutes;
