import React, { ReactElement, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import Slider from './Slider';
import Header from './Header';

export default function MainLayout({ children }: PropsWithChildren<any>): ReactElement {
    return (
        <Layout>
            <Slider />
            <Layout>
                <Header />
                <Layout.Content>{children}</Layout.Content>
            </Layout>
        </Layout>
    );
}
