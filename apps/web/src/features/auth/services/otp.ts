import axiosClient from "../../../api/axiosClient";

export interface OtpPayload {
  otp: string;
}

export interface OtpResponse {
  success: boolean;
  message: string;
}

export const submitOtp = async (payload: OtpPayload): Promise<OtpResponse> => {
  const { data } = await axiosClient.post("/auth/otp", payload);
  return data;
};
