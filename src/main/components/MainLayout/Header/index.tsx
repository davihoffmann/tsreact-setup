import React, { ReactElement } from 'react';
import { Divider, Layout } from 'antd';
import MenuToggle from './MenuToggle';
import Breadcrumb from './Breadcrumb';

export default function Header(): ReactElement {
    return (
        <Layout.Header
            style={{
                padding: 0,
                height: 'auto',
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                background: '#f1f1f1',
            }}
        >
            <div style={{ height: '64px', margin: '15px' }}>
                <MenuToggle />
            </div>
            <Divider style={{ margin: 0 }} />
            <div style={{ margin: '15px' }}>
                <Breadcrumb />
            </div>
        </Layout.Header>
    );
}
