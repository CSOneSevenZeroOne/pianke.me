var $=require("jquery")
module.exports = function () {
	$(".loginto").on("click",function () {
		var tel=$(".login-content").find("input").eq(0).val()
		var pwd=$(".login-content").find("input").eq(1).val()
		
		if(tel!=false&&pwd!=false) {
			$.ajax({
				url: "http://localhost:8888/login",
				type: "post",
				data: {
					tel,
					pwd
				}
			}).then((res) => {
				if (res == "失败") {
					alert("登录失败")
				} else {
					alert("登录成功")
					var img=JSON.parse(res)[0].u_img
					if(img){
						img="http://qnstatic.pianke.me/public/assets/img/user-default-img.png"
					}
					sessionStorage.setItem("u_img", img)
					sessionStorage.setItem("u_tel",JSON.parse(res)[0].u_tel)
					$(".login").hide()
					$("body").css("overflow", "auto")
					$(".login-btn").eq(0).addClass("hidden")
					$(".userinfo").removeClass("hidden")
					$(".massage").removeClass("hidden")
					$(".userinfo").find("img").attr("src",img)
				}
			})
		}else {
			alert("请输入账号")
		}
	})
}