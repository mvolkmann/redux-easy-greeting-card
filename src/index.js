import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reduxSetup} from 'redux-easy';
import App from './App';
import './reducers';

import './index.css';

const initialState = {
  occasion: 'Birthday',
  name: '',
  message: '',
  show: 'form'
};

const store = reduxSetup({initialState, render});

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

render();
