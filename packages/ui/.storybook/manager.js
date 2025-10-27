import { addons } from "storybook/manager-api";
import { create } from "@storybook/theming";

const customTheme = create({
  base: "light",
  brandTitle: "BAB Design System",
  // brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  // brandTarget: "_self",
  // colorPrimary: "#1677ff", // Ant Design blue
  // colorSecondary: "#52c41a", // Ant Design green
  // appBg: "#f6f8fa",
  // appContentBg: "#fff",
  // appBorderColor: "#e4e7ed",
  // appBorderRadius: 6,
  // textColor: "#1d2129",
  // textInverseColor: "#fff",
  // barBg: "#1677ff",
  // barSelectedColor: "#52c41a",
  // barTextColor: "#fff",
});

addons.setConfig({
  theme: customTheme,
});
