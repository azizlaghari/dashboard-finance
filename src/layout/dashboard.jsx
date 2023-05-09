import { RxDashboard } from 'react-icons/rx';
import { BsShieldCheck } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { CiDark } from 'react-icons/ci';
import { IoMdAnalytics } from 'react-icons/io';
import { TfiWallet } from 'react-icons/tfi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';
import { Avatar, Divider, Layout, Menu, theme } from "antd";
import React from "react";
import "./dashboard.css";
import RightDashboard from '../components/rightDashboard';

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const url = '../assets/aziz.jpg';

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
            {
              icon: <Divider />
            },
            {
              key: "6",
              icon: <BsShieldCheck />,
              label: "Security",
            },
            {
              key: "7",
              icon: <BiHelpCircle />,
              label: "Help Centre",
            },
            {
              key: "8",
              icon: <CiDark />,
              label: "Dark Mode",
            },
            {
              key: "9",
              icon:     <Avatar src={url} />              ,
              label: "Abdul Aziz ",
            },
          ]}
        />
      </Sider>
      <Layout>
        
        <Content
          style={{
         }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100vh',
              background: '#141332',
              color: "#fff"
            }}
          >
            <RightDashboard></RightDashboard>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default Dashboard;
