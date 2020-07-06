import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function UserAvatar(): ReactElement {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/site">Site</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/configuracoes">Configurações</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">-----</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <UserOutlined
                style={{
                    fontSize: '18px',
                    lineHeight: '64px',
                    padding: '0 24px',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                }}
            />
        </Dropdown>
    );
}
