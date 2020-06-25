import React, { ReactElement } from 'react';
import { Menu as AntdMenu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

export default function Menu(): ReactElement {
    return (
        <AntdMenu theme="dark" mode="inline">
            <AntdMenu.Item
                key="nav1"
                icon={<UserOutlined />}
                onClick={() => {
                    console.log('Menu 1');
                }}
            >
                nav 1
            </AntdMenu.Item>
            <AntdMenu.Item
                key="nav2"
                icon={<VideoCameraOutlined />}
                onClick={() => {
                    console.log('Menu 2');
                }}
            >
                nav 2
            </AntdMenu.Item>
        </AntdMenu>
    );
}
