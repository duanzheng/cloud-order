import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Route, IndexRoute, browserHistory, Router} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import Main from './containers/Main'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);