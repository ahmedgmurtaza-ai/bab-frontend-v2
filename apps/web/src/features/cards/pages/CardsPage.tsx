import React from 'react';
import { useTranslation } from 'react-i18next';

const CardsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t('cards.title', { defaultValue: 'Cards' })}</h1>
    </div>
  );
};

export default CardsPage;