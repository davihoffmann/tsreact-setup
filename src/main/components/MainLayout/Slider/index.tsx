import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import Menu from './Menu';

export default function Sider(): ReactElement {
    return (
        <Layout.Sider trigger={null} collapsible collapsed={!true} breakpoint="lg" collapsedWidth="80">
            <Logo />
            <Menu />
        </Layout.Sider>
    );
}
