"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

//https://github.com/teropa/redux-voting-client/commit/css
//require('./style.css');

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pair={pair} winner="Trainspotting"/>,
    document.getElementById('app')
);