import React from "react";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import themeObj from "./theme/theme";

const theme: ThemeConfig = {
  token: {
    colorPrimary: themeObj.colors.primary,
    colorInfo: themeObj.colors.info,
    colorSuccess: themeObj.colors.success,
    colorWarning: themeObj.colors.warning,
    colorError: themeObj.colors.error,
    colorTextBase: themeObj.colors.text,
    colorBgBase: themeObj.colors.surface,
    colorBorder: themeObj.colors.border,
    fontFamily: themeObj.typography.fontFamily,
    fontSize: parseInt(themeObj.typography.fontSizeBase),
    borderRadius: parseInt(themeObj.borderRadius.md),
    wireframe: false, // Set to true for wireframe mode during development
  },
  components: {
    Button: {
      colorPrimary: themeObj.colors.primary,
      colorPrimaryHover: themeObj.colors.primaryHover,
      colorPrimaryActive: themeObj.colors.primaryActive,
      colorTextLightSolid: themeObj.colors.surface,
      controlHeightLG: 40,
      controlHeight: 32,
      controlHeightSM: 24,
      borderRadius: parseInt(themeObj.borderRadius.md),
      borderRadiusSM: parseInt(themeObj.borderRadius.sm),
      borderRadiusLG: parseInt(themeObj.borderRadius.lg),
    },
    Input: {
      colorText: themeObj.components.input.color,
      colorBgContainer: themeObj.colors.surface,
      colorBorder: themeObj.colors.border,
      colorBorderHover: themeObj.components.input.hoverBorderColor,
      colorPrimary: themeObj.colors.primary,
      controlHeight: 32,
      controlHeightLG: 40,
      fontSize: parseInt(themeObj.typography.bodyMd),
      borderRadius: parseInt(themeObj.borderRadius.md),
    },
    Layout: {
      siderBg: themeObj.colors.surface,
      headerBg: themeObj.colors.surface,
      bodyBg: themeObj.colors.background,
    },
    Breadcrumb: {
      fontSize: parseInt(themeObj.typography.bodySm),
      fontSizeIcon: parseInt(themeObj.typography.bodyMd),
      colorText: themeObj.colors.textSecondary,
      colorTextDescription: themeObj.colors.textTertiary,
      linkColor: themeObj.colors.link,
      linkColorHover: themeObj.colors.linkHover,
      separatorColor: themeObj.colors.textTertiary,
    },
    FloatButton: {
      colorPrimary: themeObj.colors.primary,
      colorPrimaryHover: themeObj.colors.primaryHover,
      colorBgElevated: themeObj.colors.primary,
      borderRadius: parseInt(themeObj.borderRadius.full),
      controlHeight: 40,
      controlHeightLG: 50,
      fontSize: 16,
      fontSizeLG: 18,
      zIndexPopup: themeObj.zIndex.floating,
    },
    Notification: {
      colorSuccess: themeObj.colors.success,
      colorInfo: themeObj.colors.info,
      colorWarning: themeObj.colors.warning,
      colorError: themeObj.colors.error,
      borderRadius: parseInt(themeObj.borderRadius.md),
      colorText: themeObj.colors.text,
      colorBgBase: themeObj.colors.surface,
      boxShadow: themeObj.shadows.lg,
    },
    Modal: {
      colorBgContainer: themeObj.colors.surface,
      colorText: themeObj.colors.text,
      borderRadiusLG: parseInt(themeObj.borderRadius.lg),
      colorPrimary: themeObj.colors.primary,
    },
    Card: {
      colorBgContainer: themeObj.colors.surface,
      colorBorder: themeObj.colors.border,
      borderRadiusLG: parseInt(themeObj.borderRadius.lg),
      paddingLG: parseInt(themeObj.spacing.lg),
    },
    Tabs: {
      colorPrimary: themeObj.colors.primary,
      colorText: themeObj.colors.text,
      colorBorder: themeObj.colors.border,
    },
    Select: {
      colorBgContainer: themeObj.colors.surface,
      colorText: themeObj.colors.text,
      colorBorder: themeObj.colors.border,
      colorPrimary: themeObj.colors.primary,
    },
    Tag: {
      colorPrimary: themeObj.colors.primary,
      colorBg: `${themeObj.colors.primary}20`, // with 20% opacity
      borderRadiusSM: parseInt(themeObj.borderRadius.sm),
    },
  },
};

export const AntdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
