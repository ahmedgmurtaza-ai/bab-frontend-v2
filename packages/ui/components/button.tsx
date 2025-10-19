"use client";

import React from "react";
import { Button as AntButton, type ButtonProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
    <AntButton
      {...props}
      loading={isLoading}
      icon={icon || (isLoading ? <LoadingOutlined /> : undefined)}
    >
      {children}
    </AntButton>
  );
};
