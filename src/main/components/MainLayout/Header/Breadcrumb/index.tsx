import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

import { home } from '../../../../modules/Main/routes';

export default function Breadcrumb(): ReactElement {
    return (
        <AntdBreadcrumb>
            <AntdBreadcrumb.Item>
                <Link to={home.path}>Home</Link>
            </AntdBreadcrumb.Item>
            <AntdBreadcrumb.Item>Clientes</AntdBreadcrumb.Item>
        </AntdBreadcrumb>
    );
}
