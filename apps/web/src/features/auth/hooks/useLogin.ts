import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/loginService";

export function useLogin() {
  return useMutation({ mutationFn: loginService });
}
