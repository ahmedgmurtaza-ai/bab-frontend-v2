import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";

export interface BreadcrumbItem {
  title: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className,
  style,
}) => {
  return (
    <AntdBreadcrumb separator={separator} className={className} style={style}>
      {items.map((item, idx) => (
        <AntdBreadcrumb.Item key={idx} href={item.href}>
          {item.title}
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  );
};
