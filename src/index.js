import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {HashRouter, Route, Link} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import "./reset.css"
//组件导入部分
// import Header from './components/header/header';
import Container from './components/timeline/contain/container'


let store = createStore((state = {

}, action)=> {
    switch(action.type) {
        case 'ABC':
            return Object.assign({}, state, {});
        case 'DECREMENT':
            return state
        default:
            return state
    }
})


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <div>
                {/*<Route exact path="/" component={Header} />*/}
                <Route path="/container" component={Container} />
            </div>
        </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();






