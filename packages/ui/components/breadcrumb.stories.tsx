import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: "text",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "Home", href: "/" },
      { title: "Accounts", href: "/accounts" },
      { title: "Details" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { title: "Home", href: "/" },
      { title: "Cards", href: "/cards" },
      { title: "Visa" },
    ],
    separator: ">",
  },
};
