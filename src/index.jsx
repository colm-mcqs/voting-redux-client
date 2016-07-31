"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';

import {Provider} from 'react-redux';
import reducer from './reducer.jsx';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import Results from './components/Results';
//https://github.com/teropa/redux-voting-client/commit/css
//require('./style.css');

const store = createStore(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['127 Hours', 'Dr.Octopus'],
            tally: {'127 hours': 3}
        }
    }
});

const routes = <Route component={App}>
        <Route path="/results" component={Results}/>
        <Route path="/" component={VotingContainer}/>
    </Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);