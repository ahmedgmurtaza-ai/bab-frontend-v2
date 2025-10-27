// Account-related TypeScript types

export interface Account {
  id: string;
  accountNumber: string;
  accountName: string;
  balance: number;
  currency: string;
  accountType: "checking" | "savings" | "credit" | "investment";
  availableBalance?: number;
  status: "active" | "inactive" | "closed";
  openedDate: string; // ISO date string
}

export interface Transaction {
  id: string;
  accountId: string;
  date: string; // ISO date string
  description: string;
  amount: number; // Positive for credits, negative for debits
  type: "debit" | "credit";
  category: string;
  runningBalance: number;
}

export interface CreateAccountRequest {
  accountName: string;
  accountType: "checking" | "savings" | "credit" | "investment";
  initialDeposit?: number;
}

export interface AccountBalance {
  accountId: string;
  currentBalance: number;
  availableBalance: number;
  holdBalance: number;
}
