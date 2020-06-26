import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import SiteLayout from '../../components/SiteLayout';
import ContentLayout from '../../components/ContentLayout';
import { home } from './route';

const Site = (): ReactElement => {
    return (
        <SiteLayout>
            <Route {...home} render={() => <ContentLayout />} />
        </SiteLayout>
    );
};

export default Site;
