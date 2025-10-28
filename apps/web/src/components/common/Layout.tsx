import {
  User,
  Video,
  Upload,
  Menu as MenuIcon,
  PanelLeftOpen,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";
import { Layout as AntLayout, Menu } from "antd";
import { useState } from "react";
import { colors } from "@repo/ui";
const { Header, Sider, Content } = AntLayout;

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Responsive: collapsed by default on mobile (below md)
  const [collapsed, setCollapsed] = useState(false);

  // Collapse sidebar automatically on mobile
  const handleBreakpoint = (broken: boolean) => {
    setCollapsed(broken);
  };

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <AntLayout style={{ minHeight: "100vh", background: colors.background }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth={0}
        onBreakpoint={handleBreakpoint}
        style={{ background: colors.primary }}
      >
        <div
          className="logo h-8 my-4 mx-4 rounded"
          style={{ background: colors.secondary, opacity: 0.8 }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ background: colors.primary, color: colors.surface }}
        >
          <Menu.Item key="1" icon={<User size={18} />}>
            Dashboard
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            icon={<Settings size={18} />}
            title="Settings"
          >
            <Menu.Item key="2-1" icon={<Shield size={16} />}>
              Security
            </Menu.Item>
            <Menu.Item key="2-2">Preferences</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<Video size={18} />} title="Media">
            <Menu.Item key="3-1">Videos</Menu.Item>
            <Menu.Item key="3-2">Photos</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="4" icon={<Upload size={18} />}>
            Uploads
          </Menu.Item>
          <Menu.Item key="5" icon={<LogOut size={18} />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Header
          style={{ background: colors.surface, padding: 0 }}
          className="flex items-center w-full"
        >
          <button
            className="trigger text-xl px-6 cursor-pointer transition-colors border-none outline-none bg-transparent"
            style={{ color: colors.primary, transition: "color 0.3s" }}
            onClick={toggle}
            aria-label="Toggle sidebar"
            onMouseOver={(e) =>
              (e.currentTarget.style.color = colors.linkHover)
            }
            onMouseOut={(e) => (e.currentTarget.style.color = colors.primary)}
          >
            {collapsed ? <PanelLeftOpen size={22} /> : <MenuIcon size={22} />}
          </button>
          <span
            className="text-lg font-semibold ml-2"
            style={{ color: colors.primary }}
          >
            Header
          </span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colors.surface,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </AntLayout>{" "}
    </AntLayout>
  );
};

export default Layout;
