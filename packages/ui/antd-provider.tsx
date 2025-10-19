import React from 'react';
import { ConfigProvider } from 'antd';
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Here you can customize Ant Design's global tokens
    colorPrimary: '#1677ff',
  },
  components: {
    // Here you can customize individual component tokens
    Button: {
      algorithm: true, // Enable algorithm to apply theme to button
    },
  },
};

export const AntdProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  );
};