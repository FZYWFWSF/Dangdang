define(["jquery"],function($){
	function index(){
		$(function(){
			$(".onover").mouseenter(function(){
				$(this).find(".hide").attr("class","my_down_list show")
				$(this).find("em,strong").html("")
			})
			$(".onover").mouseleave(function(){
				$(this).find(".show").attr("class","my_down_list hide")
				$(this).find("em,strong").html("|")
			})
			$(".onovercity").mouseenter(function(){
				$(".city").attr("class","city show")
			})
			$(".onovercity").mouseleave(function(){
				$(".city").attr("class","city hide")
			})
			$(".downList").on("mouseenter",".overdownList",function(){
				$(".downList").find(".downAll").css("display","block")
				$(".downList").css("height","38px")
			})
			$(".downList").mouseleave(function(){
				$(this).find(".downAll").css("display","none")
				$(this).css("height","35px")
			})
		})
	}

	return{
		index:index
	}
})
