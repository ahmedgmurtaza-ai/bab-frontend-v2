import React, { useState } from "react";
import { Input, Button } from "@repo/ui";

const ForgotPasswordPage: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: Add forgot password logic
    alert("Password reset instructions sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <Input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              required
              className="w-full"
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">CR Number</label>
            <Input
              type="text"
              value={crNumber}
              onChange={(e) => setCrNumber(e.target.value)}
              placeholder="Enter CR number"
              required
              className="w-full"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center font-medium">
              {error}
            </div>
          )}
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
