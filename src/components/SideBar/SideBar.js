import React from "react";
import { Layout, Menu } from "antd";
import { StarOutlined, UserOutlined } from "@ant-design/icons";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      breakpoint='md'
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        theme='light'
        defaultSelectedKeys={[location.pathname]}
        mode='inline'
      >
        <Menu.Item key='/authors' icon={<UserOutlined />}>
          <Link to='/authors'>Author</Link>
        </Menu.Item>
        <Menu.Item key='/favourite-authors' icon={<StarOutlined />}>
          <Link to='/favourite-authors'>Favourite Author</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
