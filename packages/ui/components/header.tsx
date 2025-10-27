import React from "react";

interface HeaderProps {
  title: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, style, className }) => {
  return (
    <header 
      id="header" 
      style={style}
      className={className}
    >
      <h1>{title}</h1>
    </header>
  );
};
