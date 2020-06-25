import React, { ReactElement, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export default function MenuToggle(): ReactElement {
    const [maximized, setMaximized] = useState(false);

    return maximized ? (
        <MenuFoldOutlined className="trigger" onClick={() => setMaximized(!maximized)} />
    ) : (
        <MenuUnfoldOutlined className="trigger" onClick={() => setMaximized(!maximized)} />
    );
}
