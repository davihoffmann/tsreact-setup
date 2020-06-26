import React, { ReactElement, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SplashScreen from '../../components/SplashScreen';

import { home as site } from '../../modules/Site/route';
import { login } from '../../modules/Auth/routes';

const Site = lazy(() => import('../../modules/Site'));
const Auth = lazy(() => import('../../modules/Auth'));

export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Suspense fallback={SplashScreen}>
                <Switch>
                    <Route path={site.path} component={Site} />
                    <Route path={login.path} component={Auth} />
                    <Redirect from="/" to={site.path} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
