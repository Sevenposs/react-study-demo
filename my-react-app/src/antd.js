import React from 'react';
import { Button } from 'antd';
import './antd.css';
import { Space ,PageHeader} from 'antd';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
const AntdDemo = () => (
  <div className="App">
      <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
    <Button type="primary">Button</Button>
  </div>
);

export default AntdDemo;