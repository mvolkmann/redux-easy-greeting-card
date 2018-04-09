import {addReducer} from 'redux-easy';

addReducer('shout', state => ({
  ...state,
  message: state.message.toUpperCase()
}));
// The above code is not needed if
// calls to dispatch('shout') are replaced with
// calls to dispatchTransform('message', m => m.toUpperCase()).
