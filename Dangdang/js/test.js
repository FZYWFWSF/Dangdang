//配置文件路径
require.config({
	paths:{
		jquery:"../jquery/jquery-1.10.1.min",
		index:"index.min"
	}
})

require(['index'],function(index){
	index.index();
})