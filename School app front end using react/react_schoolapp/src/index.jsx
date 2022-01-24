import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { App } from './app';

import './styles.less';

// setup fake backend


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);