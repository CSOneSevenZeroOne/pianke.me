var $=require("jquery")
module.exports = function () {
	console.log($(".head").find(".navbar li a"));
	$(".head").find(".navbar li a").on("click",function () {
		$(this).parent("li").addClass("active").siblings("li").removeClass("active")
	})
	$(".userinfo a img").on("mouseenter",function () {
		$(".userinfo").find(".drop-menu").css("display","block")
	}).on("mouseleave",function () {
		$(".userinfo").find(".drop-menu").css("display","none")
	})
	$(".massage .msg-icon img").on("mouseenter",function () {
		$(".massage").find(".drop-menu").css("display","block")
	}).on("mouseleave",function () {
		$(".massage").find(".drop-menu").css("display","none")
	})
	$(window).on("scroll",function () {
		if($(document).scrollTop()>=150){
			$("header").slideUp(500)
		}
		if($(document).scrollTop()<=150){
			$("header").slideDown(500)
		}
		if($(document).scrollTop()<=700){
			$(".back-top").hide()
		}
		if($(document).scrollTop()>=700){
			$(".back-top").show()
		}
	})
	$(".back-top").on("click",function () {
		$(document).scrollTop(0)
	})
}