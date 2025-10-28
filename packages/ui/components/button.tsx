"use client";

import React from "react";
import { Button as AntButton, type ButtonProps } from "antd";
import { LucideClockFading } from "lucide-react";
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
        icon={icon || (isLoading ? <LucideClockFading /> : undefined)}
      >
        {children}
      </AntButton>
    </AntdProvider>
  );
};
