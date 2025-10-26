import { useMutation } from "@tanstack/react-query";
import { submitOtp, OtpPayload } from "../services/otp";

export function useOtpSubmit() {
  return useMutation({
    mutationFn: (payload: OtpPayload) => submitOtp(payload),
  });
}
