import axiosClient from "../../../api/axiosClient";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    // add more user fields as needed
  };
}

export async function loginService(
  payload: LoginPayload
): Promise<LoginResponse> {
  const response = await axiosClient.post("/auth/login", payload);
  return response.data;
}
