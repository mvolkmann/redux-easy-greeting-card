import {addReducer} from 'redux-easy';

addReducer('shout', state => ({
  ...state,
  message: state.message.toUpperCase()
}));
