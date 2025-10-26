import React, { useState } from "react";
import { Input, Button } from "@repo/ui";

const RegisterPage: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // TODO: Add registration logic
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
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
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
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
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
