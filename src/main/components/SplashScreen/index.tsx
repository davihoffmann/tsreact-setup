import React, { ReactElement } from 'react';
import { Spin } from 'antd';

import './styles.css';

export default function SplashScreen(): ReactElement {
    return (
        <div className="loading">
            <Spin />
        </div>
    );
}
