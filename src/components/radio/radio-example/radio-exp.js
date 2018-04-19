import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-exp.css"
import "../icon-font/iconfont.css"


class Radioexp extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="radio-hot-main">
				<div className="radio-info-content ting-info-content">
				<div className="ting-img"><img src="http://hpimg.pianke.com/fdacf9abd8726b76d6dd0411e028937e20180301.gif" /></div> <div className="radio-info ting-info"><div className="radio-title">珍惜眼前人，心中无黄昏</div>
				<div className="ting-others">16.6 k次播放&nbsp;&nbsp;|&nbsp;&nbsp;评论:&nbsp;18&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:&nbsp;361</div>
				<div className="authors"><div className="ting-author">主播:&nbsp;<a href="" target="_blank">NJ文珂</a></div> 
				<div className="article-author">原文:&nbsp;<a href="" target="_blank">NJ文珂</a></div></div> 
				<div className="play-all"><div className="btn-play play-status-btn" style={{display: "none"}}>播放Ting</div>
				<div className="btn-pause play-status-btn">暂停Ting</div></div> <div className="likes-cpt ting-like"></div>
				<div className="ting-share"><div className="share-icon-cpt ting-share-icon"></div> 
				<div className="share-menu"><div className="drop-menu share-menu-item"><div className="share-cpt"><div className="share-sina"></div>
				<div className="share-wechat"><div className="code"><img style={{width:"200px"}} src="http://api5.pianke.me/version5.0/wxshare/qrcode.php?url=http%3A%2F%2Fpianke.me%2Fversion4.0%2Fweixin02%2Fwxshare.php%23!%2Fradio%2F5a97ffb1257be99945ed6ed5" /></div></div>
				<div className="share-qzone"></div> <div className="share-dou"></div></div></div></div></div></div></div>
				
			</div>
		)
	}
}

export default Radioexp;