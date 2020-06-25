import React, { ReactElement } from 'react';
import { Menu as AntdMenu } from 'antd';

export default function Menu(): ReactElement {
    return (
        <AntdMenu theme="dark" mode="horizontal">
            <AntdMenu.Item
                key="login"
                onClick={() => {
                    console.log('Logar');
                }}
            >
                Login
            </AntdMenu.Item>
        </AntdMenu>
    );
}
