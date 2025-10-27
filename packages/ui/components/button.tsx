"use client";

import React from "react";
import { Button as AntButton, type ButtonProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AntdProvider } from "../antd-provider";

export interface UIButtonProps extends ButtonProps {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<UIButtonProps> = ({
  children,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <AntdProvider>
      <AntButton
        {...props}
        loading={isLoading}
        icon={icon || (isLoading ? <LoadingOutlined /> : undefined)}
      >
        {children}
      </AntButton>
    </AntdProvider>
  );
};
