import React, { ReactElement } from 'react';
import MainLayout from '../components/MainLayout';
import Content from '../components/ContentLayout';

import './index.less';

export default function App(): ReactElement {
    return (
        <MainLayout>
            <Content />
        </MainLayout>
    );
}
