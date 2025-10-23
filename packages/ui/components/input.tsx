import React from "react";
import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

export type InputProps = AntdInputProps & {
  // Add custom props here if needed
};

const InputComp: React.FC<InputProps> = (props) => {
  return <AntdInput {...props} />;
};

export const Input = Object.assign(InputComp, {
  Password: AntdInput.Password,
});
