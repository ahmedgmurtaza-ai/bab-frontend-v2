import React from 'react';
import { useTranslation } from 'react-i18next';

const PaymentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('payments.title', { defaultValue: 'Payments' })}</h1>
    </div>
  );
};

export default PaymentsPage;