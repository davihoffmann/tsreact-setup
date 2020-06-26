import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu as AntdMenu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { nav1, nav2 } from '../../../../modules/Main/routes';

export default function Menu(): ReactElement {
    const history = useHistory();

    return (
        <AntdMenu theme="dark" mode="inline">
            <AntdMenu.Item
                key="nav1"
                icon={<UserOutlined />}
                onClick={() => {
                    history.push(nav1.path);
                }}
            >
                nav 1
            </AntdMenu.Item>
            <AntdMenu.Item
                key="nav2"
                icon={<VideoCameraOutlined />}
                onClick={() => {
                    history.push(nav2.path);
                }}
            >
                nav 2
            </AntdMenu.Item>
        </AntdMenu>
    );
}
