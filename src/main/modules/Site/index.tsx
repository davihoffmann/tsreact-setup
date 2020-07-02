import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import SiteLayout from '../../components/SiteLayout';
import LayoutConfigurer from '../../components/LayoutConfigurer';
import ContentLayout from '../../components/ContentLayout';
import { home } from './routes';

export default function Site(): ReactElement {
    return (
        <SiteLayout>
            <Route
                {...home}
                render={() => (
                    <LayoutConfigurer breadcrumb={[]}>
                        <ContentLayout />
                    </LayoutConfigurer>
                )}
            />
        </SiteLayout>
    );
}
