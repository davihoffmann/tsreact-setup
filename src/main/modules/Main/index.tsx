import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

import Content from '../../components/ContentLayout';

import { home, nav1, nav2 } from './routes';

const Main = (): ReactElement => {
    return (
        <MainLayout>
            <Route {...home} render={() => <Content />} />
            <Route
                {...nav1}
                render={() => (
                    <Content>
                        <h1>Nav 1</h1>
                    </Content>
                )}
            />
            <Route
                {...nav2}
                render={() => (
                    <Content>
                        <h1>Nav 2</h1>
                    </Content>
                )}
            />
        </MainLayout>
    );
};

export default Main;
