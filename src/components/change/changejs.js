var $=require("jquery")
module.exports = function () {
      $(".set-title").text(sessionStorage.getItem("title"))
	if(sessionStorage.getItem("title")=="忘记密码"){
		$(".btn").text("发送验证")
		$(".login-input").find(".change").eq(0).attr("placeholder","请输入手机号")
		$(".login-input").find(".change").eq(0).show().siblings("input").css("display","none")
	}
	if(sessionStorage.getItem("title")=="更换手机号"){
		$(".btn").text("发送验证")
		$(".login-input").find(".change").eq(0).attr("placeholder","请输入手机号")
		$(".login-input").find(".change").eq(0).show().siblings("input").css("display","none")
	}
	if(sessionStorage.getItem("title")=="修改密码"){
		$(".btn").text("修改")
		$(".login-input").find(".change").show()
		$(".login-input").find(".change").eq(0).attr("placeholder","输入旧密码")
	}
}