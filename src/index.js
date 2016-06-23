import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {App} from './container';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>,
    document.querySelector('#app')
);