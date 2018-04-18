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
import Indexread from './components/indexread/indexread';


import Header from './components/header/header';
// 客户端
import Client from './components/client/client';
// 底部
import Footer from './components/footer/footer';

let store = createStore((state = {
    hoverword : ""
}, action) =>{
    switch(action.type){
        case 'ABC':
            return Object.assign({}, state, {hoverword:action.hoverword});
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
            <Header/>
            <Route exact path="/" component={Index2}/>
            <Route path="/client" component={Client}/>
            <Route path="/indexread" component={Indexread}/>
            <Footer/>
        </div>
    </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();






