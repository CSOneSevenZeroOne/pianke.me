import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'



import "./morecontent.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : [{
                src1 : "http://tva2.sinaimg.cn/crop.0.0.996.996.50/ec39c62fjw8f6ddod449ij20ro0rp0vb.jpg",
                src2 : "http://pianke.me/public/assets/img/user_musician.png",
                name : "双笙子", content : "古风歌手双笙"
            }, {
                src1 : "http://tva4.sinaimg.cn/crop.0.0.512.512.180/7f71be41jw8etj0gb4oovj20e80e8mxf.jpg",
                src2 : "http://pianke.me/public/assets/img/user_musician.png",
                name : "MrMiss组合", content : "28届金曲奖最佳演唱組合/爵士人声组合MrMiss"
            }, {
                src1 : "http://pkicon.image.alimmdn.com/icon/20161125/126c947d4b6f525cb61ac69519450ec2.png@90w_90h_1e_1c_85Q.jpg",
                src2 : "http://pianke.me/public/assets/img/user_musician.png",
                name : "Muma木马", content : "摇滚音乐人 木马"
            }, {
                src1 : "http://wx.qlogo.cn/mmopen/Qo5MQt4c6EBMGzhTXq8f6VfaSwbKFUjG8gYCnBgibk5TRxUEAvDjGvUteiaHZcRHJf4icCWnicibb9x2LkwiaKovibkQLEYkpuYNicZg/0",
                src2 : "http://pianke.me/public/assets/img/user_author.png",
                name : "片刻小主", content : "片刻官方猫🐱"
            }]
        }

    }

    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i} className="user-cpt">
                <div className="user-info">
                    <div className="user-left">
                        <a>
                            <img src={e.src1} alt=""/>
                        </a>
                        <img src={e.src2} alt=""/>
                    </div>
                    <div className="user-right">
                        <div className="user-name">
                            <a>{e.name}</a>
                        </div>
                        <div className="user-des">
                            <a>{e.content}</a>
                        </div>
                    </div>
                </div>

            </div>


        })
    }

    render(){
        return (

            <div id="more-content" className="main" style={{display:this.props.state.choicebool?"none":"block"}}>
                <div className="past-content-title">
                    <div className="title-cpt">
                        往期精选
                    </div>
                </div>

                <div id="masonry" className="container-fluid">
                    <div className="box"><img src="http://jq22.com/images/2.jpg"/></div>
                    <div className="box"><img src="http://jq22.com/images/3.jpg"/></div>
                    <div className="box"><img src="http://jq22.com/images/4.jpg"/></div>
                    <div className="box"><img src="http://jq22.com/images/5.jpg"/></div>
                    <div className="box"><img src="http://jq22.com/images/1.jpg"/></div>
                </div>
            </div>
        );
    }
    componentDidMount(){
      console.log(22);
    }

}


export default connect((state) =>{
    // console.log(state)
    return {
        state
    }
}, (dipatch) =>{
    return {
        getstate(){
            dipatch({})
        }
    }
})(App);
