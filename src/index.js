import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import { composeWithDevTools, } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import MembersReducer from './store/membersReducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  MembersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
