import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { home } from '../../../../modules/Site/routes';

export default function Index(): ReactElement {
    const history = useHistory();
    return (
        <div
            style={{
                height: '32px',
                margin: '16px',
                cursor: 'pointer',
                fontSize: '18px',
                textAlign: 'center',
            }}
            onClick={() => history.push(home.path)}
        >
            Reactjs
        </div>
    );
}
