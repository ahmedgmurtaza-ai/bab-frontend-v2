import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "dashed", "link", "text"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "🔍",
    children: "Search Button",
  },
};
