import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@repo/ui";
import { Notification } from "@repo/ui";
import { useOtpSubmit } from "../hooks/useOtpSubmit";

const OTP_LENGTH = 6;

export const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState("");
  const otpMutation = useOtpSubmit();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
    setOtp(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== OTP_LENGTH) {
      Notification({
        type: "error",
        message: "Please enter a valid 6-digit OTP.",
      });
      return;
    }
    otpMutation.mutate(
      { otp },
      {
        onSuccess: (data) => {
          if (data.success) {
            Notification({
              type: "success",
              message: data.message || "OTP verified!",
            });
            navigate("/dashboard");
          } else {
            Notification({
              type: "error",
              message: data.message || "OTP verification failed.",
            });
          }
        },
        onError: (error) => {
          Notification({
            type: "error",
            message: (error as Error)?.message || "OTP verification failed.",
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">Enter OTP</h2>
        <Input
          value={otp}
          onChange={handleChange}
          maxLength={OTP_LENGTH}
          placeholder="Enter 6-digit OTP"
          autoFocus
          className="tracking-widest text-center text-lg"
        />
        <Button
          type="primary"
          htmlType="submit"
          loading={otpMutation.isPending}
          disabled={otp.length !== OTP_LENGTH}
        >
          Verify OTP
        </Button>
      </form>
    </div>
  );
};

export default OtpPage;
