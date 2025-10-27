import axiosClient from "../../../api/axiosClient";
import { Account, Transaction, CreateAccountRequest } from "../types";

const API_BASE = "/accounts";

// Fetch all accounts for the current user
export const fetchAccounts = async (): Promise<Account[]> => {
  const response = await axiosClient.get<Account[]>(API_BASE);
  return response.data;
};

// Fetch a specific account by ID
export const fetchAccountById = async (id: string): Promise<Account> => {
  const response = await axiosClient.get<Account>(`${API_BASE}/${id}`);
  return response.data;
};

// Fetch transactions for a specific account
export const fetchAccountTransactions = async (
  accountId: string,
): Promise<Transaction[]> => {
  const response = await axiosClient.get<Transaction[]>(
    `${API_BASE}/${accountId}/transactions`,
  );
  return response.data;
};

// Create a new account
export const createAccount = async (
  data: CreateAccountRequest,
): Promise<Account> => {
  const response = await axiosClient.post<Account>(API_BASE, data);
  return response.data;
};

// Update an existing account
export const updateAccount = async (
  id: string,
  data: Partial<Account>,
): Promise<Account> => {
  const response = await axiosClient.put<Account>(`${API_BASE}/${id}`, data);
  return response.data;
};

// Delete an account
export const deleteAccount = async (id: string): Promise<void> => {
  await axiosClient.delete(`${API_BASE}/${id}`);
};

// Transfer between accounts
export const transferBetweenAccounts = async (
  fromAccountId: string,
  toAccountId: string,
  amount: number,
  description?: string,
): Promise<{ success: boolean; transactionId: string }> => {
  const response = await axiosClient.post(`${API_BASE}/transfer`, {
    fromAccountId,
    toAccountId,
    amount,
    description,
  });
  return response.data;
};
