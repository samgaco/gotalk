import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from '../reducers';


const store = createStore(rootReducer, { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
