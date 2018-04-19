import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./read-con.css"
import "../../icon-font/iconfont.css"

class Readcon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="readconmain">
				<div id="readcon-one" >
					<div className="read-one-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/6add365177314f578c699aba48d7660e20180416.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">钗头凤（唐婉）</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 壹学僧</a></div> <div className="ting-others">385次播放  |  评论:1  |  喜欢:10
                                </div></div>
				</div>
				
				<div id="readcon-two" >
					<div className="read-two-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/c073b68194dfeb35fcccbf6c3b74567320180415.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">一见钟情</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 猫宁morning</a></div> <div className="ting-others">463次播放  |  评论:9  |  喜欢:10
                                </div></div>
				</div>
				
				<div id="readcon-three" >
					<div className="read-three-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/ebd12d4d30cd6ab4f8996f269275338020180403.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">爱情｜黑塞</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 许邻</a></div> <div className="ting-others">1.8 k次播放  |  评论:0  |  喜欢:30
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Readcon;