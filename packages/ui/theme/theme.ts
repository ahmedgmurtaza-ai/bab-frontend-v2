// Theme configuration for the design system
// You can expand this with more tokens as needed

// Named color exports for direct import
export const colorPrimary = "#cc3f47";
export const colorPrimaryHover = "#E77955";
export const colorPrimaryActive = "#cc3f47";
export const colorPrimaryTextHover = "#cc3f47";
export const colorPrimaryText = "#cc3f47";
export const colorPrimaryTextActive = "#cc3f47";
export const colorSecondary = "#f4e5de";
export const colorAccent = "#E77955";
export const colorBackground = "#f4e5de";
export const colorSurface = "#ffffff";
export const colorError = "#cc3f47";
export const colorErrorHover = "#E77955";
export const colorErrorActive = "#cc3f47";
export const colorWarning = "#E77955";
export const colorInfo = "#cc3f47";
export const colorSuccess = "#52c41a";
export const colorText = "#1d2129";
export const colorTextSecondary = "#d6d7da";
export const colorTextTertiary = "#d6d7da";
export const colorBorder = "#d6d7da";
export const colorBorderSecondary = "#f4e5de";
export const colorDivider = "#d6d7da";
export const colorLink = "#cc3f47";
export const colorLinkHover = "#E77955";
export const colorLinkActive = "#cc3f47";

export const colors = {
  primary: colorPrimary,
  primaryHover: colorPrimaryHover,
  primaryActive: colorPrimaryActive,
  primaryTextHover: colorPrimaryTextHover,
  primaryText: colorPrimaryText,
  primaryTextActive: colorPrimaryTextActive,
  secondary: colorSecondary,
  accent: colorAccent,
  background: colorBackground,
  surface: colorSurface,
  error: colorError,
  errorHover: colorErrorHover,
  errorActive: colorErrorActive,
  warning: colorWarning,
  info: colorInfo,
  success: colorSuccess,
  text: colorText,
  textSecondary: colorTextSecondary,
  textTertiary: colorTextTertiary,
  border: colorBorder,
  borderSecondary: colorBorderSecondary,
  divider: colorDivider,
  link: colorLink,
  linkHover: colorLinkHover,
  linkActive: colorLinkActive,
};

export const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontSizeBase: "14px",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  heading1: "38px",
  heading2: "30px",
  heading3: "24px",
  heading4: "20px",
  heading5: "16px",
  heading6: "14px",
  bodyLg: "16px",
  bodyMd: "14px",
  bodySm: "12px",
};

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

export const borderRadius = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  xxl: "16px",
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
  md: "0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 2px 6px 2px rgba(0, 0, 0, 0.01)",
  lg: "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  xl: "0 8px 24px 0 rgba(0, 0, 0, 0.1), 0 4px 12px -4px rgba(0, 0, 0, 0.15)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  modal: 1050,
  drawer: 1060,
  popOver: 1070,
  notification: 1080,
  message: 1090,
  tooltip: 1100,
  floating: 1040,
};

export const components = {
  button: {
    primary: {
      color: "red",
      hoverColor: "red",
      activeColor: "red",
      borderColor: "red",
      hoverBorderColor: "red",
      activeBorderColor: "red",
      bgColor: "red",
      hoverBgColor: "red",
      activeBgColor: "red",
    },
    default: {
      color: "rgba(0, 0, 0, 0.88)",
      hoverColor: "rgba(0, 0, 0, 0.88)",
      activeColor: "rgba(0, 0, 0, 0.88)",
      borderColor: "red",
      hoverBorderColor: "red",
      activeBorderColor: "red",
      bgColor: "red",
      hoverBgColor: "red",
      activeBgColor: "red",
    },
    danger: {
      color: "red",
      hoverColor: "red",
      activeColor: "red",
      borderColor: "red",
      hoverBorderColor: "red",
      activeBorderColor: "red",
      bgColor: "red",
      hoverBgColor: "red",
      activeBgColor: "red",
    },
  },
  input: {
    color: "rgba(0, 0, 0, 0.88)",
    hoverBorderColor: "red",
    activeBorderColor: "red",
    disabledBg: "red",
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  components,
};

export default theme;
