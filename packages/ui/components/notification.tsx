import { notification } from "antd";
import type { ArgsProps } from "antd/es/notification";

export type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationProps {
  type?: NotificationType;
  message: string;
  description?: string;
  duration?: number | null;
  onClose?: () => void;
  key?: string;
}

/**
 * Shows an Ant Design notification. Use this function in your components.
 * Example: Notification({ type: 'error', message: 'Error', description: 'Something went wrong.' })
 */
export function Notification({
  type = "info",
  message,
  description,
  duration = 4.5,
  onClose,
  key,
}: NotificationProps) {
  notification.open({
    type,
    message,
    description,
    duration,
    onClose,
    key,
  } as ArgsProps & { type: NotificationType });
  return null;
}
