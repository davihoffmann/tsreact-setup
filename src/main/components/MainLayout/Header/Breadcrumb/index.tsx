import React, { ReactElement } from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

export default function Breadcrumb(): ReactElement {
    return (
        <AntdBreadcrumb>
            <AntdBreadcrumb.Item>
                <a href="/">Home</a>
            </AntdBreadcrumb.Item>
            <AntdBreadcrumb.Item>Clientes</AntdBreadcrumb.Item>
        </AntdBreadcrumb>
    );
}
