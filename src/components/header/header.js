import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./header.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (

                <div id="head">
                    测试
                </div>


        );
    }
}


export default connect((state) => {
    // console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {
        getstate(){
            dipatch({

            })
        }
    }
})(App);
