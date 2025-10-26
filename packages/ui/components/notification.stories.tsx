import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Notification, NotificationProps } from "./notification";

const meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    message: { control: "text" },
    description: { control: "text" },
    duration: { control: "number" },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: NotificationProps) => (
  <Button type="primary" onClick={() => Notification(args)}>
    Show Notification
  </Button>
);

export const Success: Story = {
  args: {
    type: "success",
    message: "Success!",
    description: "Your operation was successful.",
  },
  render: Template,
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Error!",
    description: "Something went wrong. Please try again.",
  },
  render: Template,
};

export const Info: Story = {
  args: {
    type: "info",
    message: "Info",
    description: "This is an informational message.",
  },
  render: Template,
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning",
    description: "This is a warning message.",
  },
  render: Template,
};

export const Closable: Story = {
  args: {
    type: "error",
    message: "Closable Notification",
    description: "Click the close icon to hide this notification.",
    onClose: () => alert("Notification closed!"),
  },
  render: Template,
};
