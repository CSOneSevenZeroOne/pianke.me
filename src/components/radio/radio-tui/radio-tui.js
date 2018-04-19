import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-tui.css"
import "../icon-font/iconfont.css"


class Radiotui extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="radio-tui-main">
				<div className="radio-tui"><span className="iconfont">&#xe670;</span>推荐TING&nbsp;|&nbsp;Recommendation TING</div>
				
				<div id="radiocon-one" >
					<div className="radio-one-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/fdacf9abd8726b76d6dd0411e028937e20180301.gif" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">珍惜眼前人，心中无黄昏</a></div> <div className="ting-author"><a href="" target="_blank">主播 / NJ文珂</a></div> <div className="ting-others">16.9 k次播放  |  评论:18  |  喜欢:355
                                
                                </div></div>
				</div>
				
				<div id="radiocon-two" >
					<div className="radio-two-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/13ecdf92e918808102efcb0530c66bc720180301.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">拜个晚年——愿你我都活成自己的角儿</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 许邻</a></div> <div className="ting-others">17.4 k次播放  |  评论:5  |  喜欢:66
                                
                                </div></div>
				</div>
				
				<div id="radiocon-three" >
					<div className="radio-three-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/44f3b0492213db58c75c5ad5a790db5920180301.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">其实我一个朋友也没有。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 半岛玫瑰</a></div> <div className="ting-others">32.4 k次播放  |  评论:349  |  喜欢:1.2 k
                                
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}

export default Radiotui;