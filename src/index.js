import React from 'react';
import {reduxSetup} from 'redux-easy';
import App from './App';
import './reducers'; // forces loading

const initialState = {
  occasion: 'Birthday',
  name: '',
  message: '',
  show: 'form'
};

reduxSetup({
  component: <App />,
  initialState,
  target: document.getElementById('root')
});
