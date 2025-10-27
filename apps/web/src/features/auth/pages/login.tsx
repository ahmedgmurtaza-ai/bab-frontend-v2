import React, { useState } from "react";
import { Input, Button, Notification } from "@repo/ui";
import { useLogin } from "@/features/auth/hooks/useLogin";

const LoginPage: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [crNumber, setCrNumber] = useState("");
  // Remove unused error state

  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError("");
    // Basic validation
    if (!mobile.match(/^\d{8,15}$/)) {
      // setError("Please enter a valid mobile number.");
      return;
    }
    if (!crNumber.match(/^\d{5,15}$/)) {
      // setError("Please enter a valid CR number.");
      return;
    }
    // Call login mutation
    loginMutation.mutate(
      { email: mobile, password: crNumber },
      {
        onSuccess: () => {
          // Handle successful login (e.g., redirect, store token, etc.)
          // For now, just clear the form
          setMobile("");
          setCrNumber("");
        },
        onError: (err: unknown) => {
          // Try to extract error message
          let apiError = "Login failed";
          if (typeof err === "object" && err !== null && "message" in err) {
            apiError = (err as { message: string }).message;
          }
          Notification({
            type: "error",
            message: "Login Error",
            description: apiError,
          });
        },
      },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
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
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loginMutation.status === "pending"}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
