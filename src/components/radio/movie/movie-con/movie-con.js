import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./movie-con.css"
import "../../icon-font/iconfont.css"

class Moviecon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="movieconmain">
				<div id="moviecon-one" >
					<div className="movie-one-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/9ebb6053a2729d651278e714a91f48bf20180411.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《爆裂无声》守好你的善意，不要让人性“失踪”</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 弓氏墨宸Cc</a></div> <div className="ting-others">468次播放  |  评论:0  |  喜欢:6
                                </div></div>
				</div>
				
				<div id="moviecon-two" >
					<div className="movie-two-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/ea4b9a8bc4d28419e156d3d274380d4b20180324.png?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">黄泉</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 北及</a></div> <div className="ting-others">1.0 k次播放  |  评论:7  |  喜欢:28
                                </div></div>
				</div>
				
				<div id="moviecon-three" >
					<div className="movie-three-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/2f98d9ab5fce9c4f92da2f26fe6b64e720180321.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《妖猫传》：最美不过少年风流，这前朝荣景，败也华章。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 爱晚FM</a></div> <div className="ting-others">1.3 k次播放  |  评论:0  |  喜欢:10
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Moviecon;