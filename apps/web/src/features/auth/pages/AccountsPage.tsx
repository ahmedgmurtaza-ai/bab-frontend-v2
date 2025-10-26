import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('accounts.title', { defaultValue: 'Accounts' })}</h1>
    </div>
  );
};

export default AccountsPage;