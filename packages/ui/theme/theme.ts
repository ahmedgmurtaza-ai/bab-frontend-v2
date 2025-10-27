// Theme configuration for the design system
// You can expand this with more tokens as needed
export const colors = {
  primary: "#cc3f47", // main brand red
  primaryHover: "#E77955", // lighter accent
  primaryActive: "#cc3f47", // same as primary for now
  primaryTextHover: "#cc3f47",
  primaryText: "#cc3f47",
  primaryTextActive: "#cc3f47",
  secondary: "#f4e5de", // soft background
  accent: "#E77955", // accent
  background: "#f4e5de", // main background
  surface: "#ffffff", // surface
  error: "#cc3f47", // use brand red for error
  errorHover: "#E77955",
  errorActive: "#cc3f47",
  warning: "#E77955", // use accent for warning
  info: "#cc3f47",
  success: "#52c41a",
  text: "#1d2129",
  textSecondary: "#d6d7da",
  textTertiary: "#d6d7da",
  border: "#d6d7da",
  borderSecondary: "#f4e5de",
  divider: "#d6d7da",
  link: "#cc3f47",
  linkHover: "#E77955",
  linkActive: "#cc3f47",
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
