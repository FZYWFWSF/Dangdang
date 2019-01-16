define(["jquery"],function($){
	function index(){
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
				$(this).find(".ocity_a").attr("class","hover_a ocity_a")
			})
			$(".onovercity").mouseleave(function(){
				$(".city").attr("class","city hide")
				$(".ocity_a").attr("class","ocity_a")
			})
			$(".downList").on("mouseenter",".overdownList",function(){
				$(".downList").find(".downAll").css("display","block")
				$(".downList").css("height","38px")
			})
			$(".downList").mouseleave(function(){
				$(this).find(".downAll").css("display","none")
				$(this).css("height","35px")
			})

			$(window).scroll(function(){
				var oscrolltop = $(window).scrollTop();
				if(oscrolltop > 750){
					$(".bigsearchbox").css("display", "block")
				}else{
					$(".bigsearchbox").css("display", "none")
				}
			})
	/*sidebar*/
		$.ajax({
			type:"GET",
			url:"data/data1.json",
			success:function(arr){
				var oUl = $("<ul></ul>")
				for(var i = 0; i < arr.length; i++){
					var oLi = $("<li></li>")
					for(var j = 0; j < arr[i].one.length; j++){
						$("<a href=" + arr[i].one[j].url + " target='_blank' >" + arr[i].one[j].title + "</a>").appendTo(oLi)
					}
					oLi.appendTo(oUl);
				}
				oUl.appendTo($(".bannerbox .left"))
				$(".bannerbox .left ul").on("mouseenter", "li", function(){
					$(this).attr("class", "hover").siblings().attr("class", "");
					$(".left_list_div").eq($(this).index()).css("display","block")
				})
			},
			error:function(msg){
				alert(msg)
			}
		})


		/*banner*/

		$.ajax({
			type:"GET",
			url:"data/data2.json",
			success:function(arr){	
				for(var i = 0; i < arr.length; i++){
					var oLi = $("<li></li>")
					for(var j = 0; j < arr[i].images.length; j++){
						$(`<a href="${arr[i].images[j].href}"><img src="${arr[i].images[j].src}"></a>`).appendTo(oLi)
					}
					oLi.appendTo(".bannerimg")
				}


				var aBnts = $(".onum").find("li")
				var oUl = $(".bannerimg")
				var aLis = $(".bannerimg").find("li")

				var iNow = 0;
				var timer = null;
				aLis.eq(0).css("opacity",1).siblings().css("opacity",0);
				aBnts.mouseenter(function(){
					iNow = $(this).index();
					tab();
				})
				timer = setInterval(timerInner, 1000);
				function tab(){
					aBnts.attr("class", "")
					aBnts.eq(iNow).attr("class", "hover")

					aLis.stop().animate({
						"opacity": 0
					},1000)
					aLis.eq(iNow).stop().animate({
						"opacity": 1
					},1000,function(){
						
						if(iNow == aLis.size() ){
							aBnts.eq(0).attr("class", "hover").siblings().attr("class", "")
						}
					})
					

				}
				function timerInner(){

					tab();
					iNow++
					if(iNow == aLis.size() ){
						iNow = 0;
					}
				}

				$(".center").mouseenter(function(){
					clearInterval(timer);
				})
				$(".center").mouseleave(function(){
					timer = setInterval(timerInner, 1000);
				})
			},
			error:function(msg){
				alert(msg);
			}
		})

		/*drop-down_list*/
		$.ajax({
			type:"GET",
			url:"data/data3.json",
			success:function(arr){
				
				for(var i = 0; i < arr.length; i++){
					var oleft_list_div = $(`<div class = "left_list_div clear"></div>`)
					$(`<div class = "l_l_d_top clear">
							<li><a href=""><i>图书馆</i><b></b><strong></strong></a></li>
							<li><a href=""><i>童书馆</i><b></b><strong></strong></a></li>
						</div>`).appendTo(oleft_list_div)
					var odiv1 = $(`<div class = "left_list_div_div"></div>`);
					var odiv2 = $(`<div class = "centerContent"></div>`);
 					for(var j = 0; j < arr[i].index.length; j++){

						if(j == 0){
								var oUl1 = $("<ul></ul>")
								var oLi1 = $("<li></li>")
								oLi1.appendTo(oUl1)
								$(`<h4>${arr[i].index[j].title}</h4>`).appendTo(oLi1);
								var oDiv = $("<div></div>");
								oUl1.appendTo(odiv1)
							for(var k = 0; k < arr[i].index[j].con.length; k++){
								$(`<a href="${arr[i].index[j].con[k].url}">${arr[i].index[j].con[k].world}<i>>></i></a>`).appendTo(oDiv)
							}
								oDiv.appendTo(oLi1);
						}else{
							var oUl2 = $("<ul></ul>")
								var oLi2 = $("<li></li>")
								oLi2.appendTo(oUl2)
								$(`<h4>${arr[i].index[j].title}</h4>`).appendTo(oLi2);
								var oDiv1 = $("<div></div>");
								oUl2.appendTo(odiv2)
							for(var k = 0; k < arr[i].index[j].con.length; k++){
								$(`<a href="${arr[i].index[j].con[k].url}">${arr[i].index[j].con[k].world}</a><i>|</i>`).appendTo(oDiv1)
							}
								oDiv1.appendTo(oLi2);
						}
					}
					odiv1.appendTo(oleft_list_div)
					oleft_list_div.appendTo($(".left_list"))
					odiv2.appendTo(oleft_list_div)
				}
			},
			error:function(msg){
				alert(msg);
			}
		})
	}

	return{
		index:index
	}
})
