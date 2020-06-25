import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                <Route />
            </Switch>
        </BrowserRouter>
    );
}
