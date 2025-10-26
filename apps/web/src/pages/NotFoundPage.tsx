import React from "react";

const NotFoundPage: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2 text-gray-600">Page not found</p>
      <a
        href="/auth/login"
        className="text-blue-600 hover:underline mt-4 block"
      >
        Go to Login
      </a>
    </div>
  </div>
);

export default NotFoundPage;
