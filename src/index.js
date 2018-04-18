import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {HashRouter, Route, Link} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import "./reset.css"
//组件导入部分

import Index2 from './components/index2/index2';



import Header from './components/header/header';
// 客户端
import Client from './components/client/client';
// 底部
import Footer from './components/footer/footer';
<<<<<<< HEAD
// 登录
import Login from './components/login/login';
// 登录
import Change from './components/change/change';
// 设置用户信息
import Setuser from './components/setuser/setuser';


let store = createStore((state = {
        choicebool:true
}, action)=> {
    switch(action.type) {
        case 'ABC':
            return Object.assign({}, state, {choicebool:action.choicebool});
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
                <Route exact path="/" component={Index2} />
                <Header />
                <Login />
                <Route exact path="/client" component={Client} />
                <Route exact path="/change" component={Change} />
                <Route exact path="/setuser" component={Setuser} />

                <Footer />
            </div>
        </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();






