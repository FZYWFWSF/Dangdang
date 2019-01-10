// 冒泡排序：
// //从小到大排序，通过冒泡排序
			/*
				冒泡排序：
					规则：输入6个无序的数字，【从头到尾依次比较相邻两个数字大小】，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列。
					【注】冒泡排序每次都会找出一个较大的数，放在正确的位置。

			 /*
			 	9, 8, 7, 6, 5, 4
			 第一轮：5次
				9, 8, 7, 6, 5, 4
				8, 9, 7, 6, 5, 4
				8, 7, 9, 6, 5, 4
				8, 7, 6, 9, 5, 4
				8, 7, 6, 5, 9, 4
				8, 7, 6, 5, 4, 9
			第二轮：
				8, 7, 6, 5, 4
				7, 8, 6, 5, 4
				7, 6, 8, 5, 4
				7, 6, 5, 8, 4
				7, 6, 5, 4, 8
			第三轮：
				7, 6, 5, 4
				6, 7, 5, 4
				6, 5, 7, 4
				6, 5, 4, 7
			第四轮：
				6, 5, 4
				5, 6, 4
				5, 4, 6
			第五轮：
				5, 4
				4, 5

			关键点：每一轮比较的次数 = 数组的长度 - 当前轮数
			  */
function BubbleSort(arr){
	for(i = 0 ; i < arr.length - 1 ; i++){
		// 比较的轮数
		for(j = 0 ; j < arr.length - (i + 1) ; j++){
			// 每一轮比较的次数
			if(arr[j] > arr[j +1]){
				// 如果前面的数比后面的数大交换两个数的位置
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}	
}
// 顺序排序
/*
			选择排序，打擂台法
				规则：通过比较首先选出最小的数放在第一个位置上，然后在其余的数中选出次小数放在第二个位置上,依此类推,直到所有的数成为有序序列。
			【注】每一轮比较都会找出一个最小的数，放在正确的位置	

			9, 8, 7, 6, 5, 4
			第一轮：
				9, 8, 7, 6, 5, 4
				8, 9, 7, 6, 5, 4
				7, 9, 8, 6, 5, 4
				6, 9, 8, 7, 5, 4
				5, 9, 8, 7, 6, 4
				4, 9, 8, 7, 6, 5
			第二轮：
				9, 8, 7, 6, 5
				8, 9, 7, 6, 5
				7, 9, 8, 6, 5
				6, 9, 8, 7, 5
				5, 9, 8, 7, 6
			第三轮：
				9, 8, 7, 6
				8, 9, 7, 6
				7, 9, 8, 6
				6, 9, 8, 7
			第四轮：
				9, 8, 7
				8, 9, 7
				7, 9, 8
			第五轮：
				9, 8
				8, 9

			每一轮比较的次数 = 数组的长度 - 当前轮数
			 */
function changeSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		// j准备打擂台的数
		for(var j = i + 1 ; j < arr.length ; j++){
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}
//获取当前有效样式兼容IE
function getStyle(nodes, styleStr){
	if(nodes.currentStyle){
		return nodes.currentStyle[styleStr];
	}else{
		return getComputedStyle(nodes)[styleStr];
	}
}
//getElementsClassName  兼容IE
function elementsByClassName(node, classStr){
	//1、先将node节点下，所有的子节点都获取
	var nodes = node.getElementsTagName("*");
	var resArr = [];
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == classStr){
			resArr.push(nodes[i]);
		}
	}
	return resArr;
}

// 删除空白节点
 
function removeSpaceNode(nodes){
	var resArr = []; //装不是空白的节点的
	for(var i = 0; i < nodes.length; i++){
		if(!(nodes[i].node.Type == 3 && /^\s+$/ig.test(nodes[i].nodeValue))){
			resArr.push(nodes[i]);
		}
	}
	return resArr;
}


function removeSpaceNode2(parentNode){
	var nodes = parentNode.childNodes;
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue)){
			//直接在父节点上，把纯空白节点删除掉。
			parentNode.removeChild(nodes[i]);
		}
	}
}
//颜色随机
function randomColor(){
			var str = "rgba( "+ parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", 1)";
		}

//拖拽
function drag(node){
	var offx = 0;
	var offy = 0;
	node.onmousedown = function(ev){

		var e = ev || window.event;
		offx = e.clientX - node.offsetLeft;
		offy = e.clientY - node.offsetTop;

			document.onmousemove = function(ev){
				var e = ev || window.event;
				node.style.left = e.clientX - offx + "px";
				node.style.top = e.clientY - offy + "px";
			}
	}
	
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}

//事件监听器的浏览器兼容写法
	function addEvent(node, eventType, funcName){
		if(node.addEventListener){
			node.addEventListener(eventType, funcName, false);
		}else{
			node.addEventListener("on" + eventType, funcName);
		}
	}

	function removeEvent(node, eventType, funcName){
		if(node.removeEventListener){
			node.removeEventListener(eventType, funcName);
		}else{
			node.detachEvent("no" + eventType, funcName);
		}
	}


//设置cookie
//  name  cookie 的name名
//  value  cookie 的name值
//  obj   把expire  path  securs domain 放在对象里
 function setCookie(name, value, obj){
 	var str = encodeURIComponent(name) + "=" + encodeURIComponent(value);
 	if(obj){
 		if(obj.expires){
 			str += ";expires" + numOfDate(obj.expires);
 		}
 		if(obj.path){
 			str += ";path" + obj.path;
 		}
 		if(obj.domain){
 			str += ";domain" + obj.domain;
 		}
 		if(obj.securs){
 			str += ";securs";
 		}
 	}
 	document.cookie = str;
 }
//删除cookie
function removeCookie(name){
	document.cookie =  encodeURIComponent(name) + "=;expires=" + new Date(0);
}

//传入name 获取name的值
function getCookie(name){
	var cookiestr = decodeURIComponent(document.cookie);
	var start = cookiestr.indexOf(name);
	if(start == -1){
		return null;
	}else{
		var end = cookiestr.indexOf(";" ,start);
		if(end == -1){
			end = cookiestr.length;
		}
	}
	var subStr = cookiestr.substring(start, end);
	var arr = subStr.split("=");
	return arr[1];

}

 //获取当前时间n天后的时间
 function numOfDate(n){
 	var d = new Date();
 	var day = d.getDate();
 	d.setDate(day + n);
 	return d;
 }