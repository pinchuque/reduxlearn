import ManualCounter from '../Redux/containers/appContainer'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './.'
import { render } from 'react-dom'

const rootElement = document.getElementById('content');

render(
    <Provider store={store}>
        <ManualCounter/>
    </Provider>
    , rootElement);
