import React, { ReactElement, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SplashScreen from '../../components/SplashScreen';

import { home as site } from '../../modules/Site/route';
const Site = lazy(() => import('../../modules/Site'));

export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Suspense fallback={SplashScreen}>
                <Switch>
                    <Route path={site.path} component={Site} />
                    <Redirect from="/" to={site.path} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
