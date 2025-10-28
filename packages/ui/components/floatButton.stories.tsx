import type { Meta, StoryObj } from "@storybook/react-vite";
import { FloatButton } from "./floatButton";
import { PlusIcon } from "lucide-react";

const meta = {
  title: "Components/FloatButton",
  component: FloatButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof FloatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Add",
    icon: <PlusIcon />,
    onClick: () => alert("Clicked!"),
  },
};

export const IconOnly: Story = {
  args: {
    icon: <PlusOutlined />,
    onClick: () => alert("Clicked!"),
  },
};

export const CustomStyle: Story = {
  args: {
    label: "Custom",
    style: { backgroundColor: "#e91e63" },
  },
};
