import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import SiteLayout from '../../components/SiteLayout';
import LoginPage from './LoginPage';

import { login } from './routes';

const Auth = (): ReactElement => {
    return (
        <Switch>
            <SiteLayout>
                <Route {...login} render={() => <LoginPage />} />
            </SiteLayout>
        </Switch>
    );
};

export default Auth;
