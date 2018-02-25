import React from 'react';
import {reduxSetup} from 'redux-easy';
import App from './App';
import './reducers'; // forces loading

const initialState = {
  occasion: 'Birthday',
  name: '',
  message: '',
  show: 'form',
  color: {
    red: true,
    green: false,
    blue: false
  },
  favoriteFlavor: 'van'
};

reduxSetup({component: <App />, initialState});
