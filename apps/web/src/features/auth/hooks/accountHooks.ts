import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAccounts,
  fetchAccountById,
  fetchAccountTransactions,
  createAccount,
  updateAccount,
  deleteAccount,
} from "../services/accountService";
import { Account, Transaction, CreateAccountRequest } from "../types";

export const useAccounts = () => {
  return useQuery<Account[], Error>({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
  });
};

export const useAccount = (id: string) => {
  return useQuery<Account, Error>({
    queryKey: ["accounts", id],
    queryFn: () => fetchAccountById(id),
    enabled: !!id,
  });
};

export const useAccountTransactions = (accountId: string) => {
  return useQuery<Transaction[], Error>({
    queryKey: ["accounts", accountId, "transactions"],
    queryFn: () => fetchAccountTransactions(accountId),
    enabled: !!accountId,
  });
};

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAccountRequest) => createAccount(data),
    onSuccess: () => {
      // Invalidate and refetch accounts
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });
};

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Account> }) =>
      updateAccount(id, data),
    onSuccess: (_, variables) => {
      // Invalidate and refetch specific account
      queryClient.invalidateQueries({ queryKey: ["accounts", variables.id] });
      // Also invalidate all accounts
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteAccount(id),
    onSuccess: () => {
      // Invalidate and refetch accounts
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });
};
