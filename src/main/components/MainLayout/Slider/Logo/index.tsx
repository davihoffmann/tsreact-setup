import React, { ReactElement } from 'react';

export default function Logo(): ReactElement {
    return (
        <div
            style={{
                height: '32px',
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '16px',
                cursor: 'pointer',
            }}
            onClick={() => {
                console.log('clicou na logo!');
            }}
        />
    );
}
