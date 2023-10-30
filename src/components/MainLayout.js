import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import {BiSolidDashboard, BiLogOut} from "react-icons/bi";
import {AiFillFolderOpen, AiFillSetting} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {MdFolderShared} from "react-icons/md";
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Input, Space } from 'antd';
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <img className="sm-logo" src="justlogo.png" alt="Logo" />
          <img className="sidebarlogo lg-logo" src="logo.png" alt="LogoETPP"></img>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick= {({key}) => {
            if (key === "signout"){
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <BiSolidDashboard className="fs-4" />,
              label: "Beranda",
              children: [
                {
                  key: "lembur",
                  label: "Lembur",
                },
                {
                  key: "piket",
                  label: "Piket",
                },
                {
                  key: "premi",
                  label: "Premi",
                },
              ]
            },
            {
              key: "datapegawai",
              icon: <MdFolderShared className="fs-4" />,
              label: "Data Pegawai",
            },
            {
              key: "rekap",
              icon: <AiFillFolderOpen className="fs-4" />,
              label: "Rekap",
              children: [
                {
                  key: "rekap_lembur",
                  label: "Lembur",
                },
                {
                  key: "rekap_piket",
                  label: "Piket",
                },
                {
                  key: "rekap_premi",
                  label: "Premi",
                },
              ]
            },
            {
              key: "pengaturan",
              icon: <AiFillSetting className="fs-4" />,
              label: "Pengaturan",
            },
            {
              key: "keluar",
              icon: <BiLogOut className="fs-4" />,
              label: "Keluar",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          
          <div  className="d-flex gap-4" >
            <Space direction="vertical"
            style={{
              margin: '16px 10px',
            }}
          >
           
            <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 1020,
            }}
            />
            </Space>
            </div>

          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <IoMdNotificationsOutline className="fs-4"/>
              <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <div>
                <img 
                width={35} 
                height={35}
                src="zahra.png" 
                alt="" />
              </div>
              <div>
                <h5 className="mb-0">Azzahra</h5>
                <p className="mb-0">Pegawai</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />

        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
