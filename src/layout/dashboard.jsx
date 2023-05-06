import { RxDashboard } from 'react-icons/rx';
import { IoMdAnalytics } from 'react-icons/io';
import { TfiWallet } from 'react-icons/tfi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';
import { Layout, Menu, theme } from "antd";
import React from "react";
import "./dashboard.css";

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <RxDashboard />,
              label: "Deshboard",
            },
            {
              key: "2",
              icon: <IoMdAnalytics />,
              label: "Analytics",
            },
            {
              key: "3",
              icon: <TfiWallet />,
              label: "My Wallet",
            },
            {
              key: "4",
              icon: <MdOutlineAccountBox />,
              label: "Accounts",
            },
            {
                key: "5",
                icon: <AiOutlineSetting />,
                label: "Setting",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
