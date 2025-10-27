import React from "react";
import { useTranslation } from "react-i18next";
import { Account } from "../types";
// import { Button } from "@bab/design-system";
// Use Button from @repo/ui if needed

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const { t } = useTranslation();

  // Format currency based on account currency (not used)
  // const formatCurrency = (amount: number, currency: string = "USD") => {
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: currency,
  //   }).format(amount);
  // };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {account.accountName}
          </h3>
          <p className="text-gray-500 text-sm">
            {t("accounts.accountNumber")}: {account.accountNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
