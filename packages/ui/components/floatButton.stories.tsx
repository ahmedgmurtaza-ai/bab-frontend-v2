import React from "react";
import { FloatButton } from "./floatButton";
import { PlusOutlined } from "@ant-design/icons";

export default {
  title: "Components/FloatButton",
  component: FloatButton,
};

export const Default = () => (
  <FloatButton
    label="Add"
    icon={<PlusOutlined />}
    onClick={() => alert("Clicked!")}
  />
);

export const IconOnly = () => (
  <FloatButton icon={<PlusOutlined />} onClick={() => alert("Clicked!")} />
);

export const CustomStyle = () => (
  <FloatButton label="Custom" style={{ backgroundColor: "#e91e63" }} />
);
