import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

/**
 * Input field with event handlers (onChange, onKeyPress, onFocus).
 */
export const WithEvents: Story = {
  args: {
    placeholder: "Type and see events in action",
  },
  render: (args: Parameters<typeof Input>[0]) => {
    const [value, setValue] = React.useState("");
    const [eventMsg, setEventMsg] = React.useState("");
    return (
      <div>
        <Input
          {...args}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            setEventMsg(`onChange: ${e.target.value}`);
          }}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
            setEventMsg(`onKeyPress: ${e.key}`)
          }
          onFocus={() => setEventMsg("onFocus")}
        />
        <div style={{ marginTop: 12, color: "#888" }}>{eventMsg}</div>
      </div>
    );
  },
};

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    allowClear: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
    value: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Input field for text entry.
 */
export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    allowClear: true,
  },
};

/**
 * Password Input field for secure entry.
 */
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    allowClear: true,
    size: "middle",
    disabled: false,
  },
  render: (args) => <Input.Password {...args} />,
};

/**
 * Disabled Input field.
 */
export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
};

/**
 * Input field with clear button.
 */
export const WithClear: Story = {
  args: {
    type: "text",
    placeholder: "Clearable input",
    allowClear: true,
  },
};

/**
 * Input field with different sizes.
 */
export const Sizes: Story = {
  args: {
    type: "text",
    placeholder: "Small input",
    size: "small",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Input {...args} size="small" placeholder="Small" />
      <Input {...args} size="middle" placeholder="Middle" />
      <Input {...args} size="large" placeholder="Large" />
    </div>
  ),
};
