import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Route, IndexRoute, browserHistory, Router} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import Main from './containers/main'
import MainPage from './containers/mainPage'
import OrderMain from './containers/orderMain'
import 'whatwg-fetch'

const store = createStore(reducer)
// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//         const nextReducer = require('./reducers');
//         store.replaceReducer(nextReducer);
//     });
// }

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={MainPage}/>
                <Route path="/index" component={MainPage}/>
                <Route path="/order-main" component={OrderMain}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);