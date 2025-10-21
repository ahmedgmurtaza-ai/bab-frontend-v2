import React from "react";
import { FloatButton as AntdFloatButton } from "antd";

export interface FloatButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  icon,
  label,
  onClick,
  style,
  className = "",
}) => {
  return (
    <AntdFloatButton
      icon={icon}
      description={label}
      onClick={onClick}
      style={style}
      className={className}
      type="primary"
    />
  );
};
