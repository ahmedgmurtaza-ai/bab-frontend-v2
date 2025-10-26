import { useMutation } from "@tanstack/react-query";
import { loginService } from "@/features/auth/services/loginService";

export function useLogin() {
  return useMutation({ mutationFn: loginService });
}
