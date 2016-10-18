import ManualCounter from './Redux/Containers/appContainer'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './Redux/store/appStore'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

const rootElement = document.getElementById('content');
render(
    <Provider store={store}>
        <ManualCounter/>
    </Provider>
    , rootElement);
