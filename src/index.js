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

//radio
import Radio from './components/radio/radioall';

//love
import Loveall from './components/radio/loveall';

//travel
import Travelall from './components/radio/travelall.js';

//story
import Storyall from './components/radio/storyall.js';

//music
import Musicall from './components/radio/musicall.js';

//movie
import Movieall from './components/radio/movieall.js';

//read
import Readall from './components/radio/readall.js';

import Love from './components/radio/love/love-logo/love.js';

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

//<Header />
//<Footer />
//<Route exact path="/Loveall" component={Loveall} />
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <div>
          	   <Header />
                <Route exact path="/Index2" component={Index2} />             
                <Route exact path="/client" component={Client} />
                <Route exact path="/Radio" component={Radio} />
                <Route path="/Loveall" component={Loveall} />
                <Route path="/Travelall" component={Travelall} />
                <Route path="/Storyall" component={Storyall} />
                <Route path="/Musicall" component={Musicall} />
                <Route path="/Movieall" component={Movieall} />
                <Route path="/Readall" component={Readall} />
                
                
                <Footer />
            </div>
        </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();






