import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./love-con.css"
import "../../icon-font/iconfont.css"

class Lovecon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main">
				
				<div id="lovecon-one" >
					<div className="love-one-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/652e7c437533fca179ad772af9ded7cf20180416.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">最新男朋友标准指南（不得不看）</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 林恩FM</a></div> <div className="ting-others">3.6 k次播放  |  评论:18  |  喜欢:33
                                </div></div>
				</div>
				
				<div id="lovecon-two" >
					<div className="love-two-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/1e49ebaac61d1d60320f4bbd4baa2e3020180416.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">90后脱丧指南|二十多岁的你，到底在焦虑什么？</a></div> <div className="ting-author"><a href="" target="_blank">主播 / DJ程一</a></div> <div className="ting-others">732次播放  |  评论:6  |  喜欢:23
                                </div></div>
				</div>
				
				<div id="lovecon-three" >
					<div className="love-three-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/5b0a2c9405440ce27ef5a93a56677a9120180415.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">我听见你的哭泣，在最深的海底。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 七锦菇凉</a></div> <div className="ting-others">496次播放  |  评论:0  |  喜欢:11
                                </div></div>
				</div>
				

				
			</div>
		)
	}
}
export default Lovecon;