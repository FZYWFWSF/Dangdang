/*
	gulp相当于一个保姆，帮助我们管理整个项目
	这个文件里，如果gulp写任务，告诉gulp要干什么，让gulp去执行

	gulp  编写任务的时候  写的语法遵从一个规范  CommonJS 规范
 */

//引入gulp这个模块
const gulp = require("gulp");

//编写任务
/*
	两个参数
	第一个参数  任务的名字
	第二个参数  任务的回调函数

 */

/*gulp.task("hello", function(){
	console.log("hello world");
})*/
/*
	整理index.html
 */
gulp.task("copy-html",function(){
	//如果没有这个路径，会自动创建
	return gulp.src("index.html")
	.pipe(gulp.dest("Dangdang"))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task("images", function(){
	return gulp.src("images/*.{jpg,gif,png}")
	.pipe(gulp.dest("Dangdang/images"))
	.pipe(connect.reload());
})

//将超过两个文件拷到一个文件夹下
//
gulp.task("data", function(){
	return gulp.src(["*.json","*.xml","!package.json"])
	.pipe(gulp.dest("Dangdang/data"))
	.pipe(connect.reload());
})

gulp.task("css", function(){
	return gulp.src(["css/*.css","css/*.map"])
	.pipe(gulp.dest("Dangdang/css"))
	.pipe(connect.reload());
})

gulp.task("jq", function(){
	return gulp.src("jquery/*.js")
	.pipe(gulp.dest("Dangdang/jquery"))
	.pipe(connect.reload());
})
gulp.task("js",function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("Dangdang/js"))
	.pipe(connect.reload());
})
gulp.task("icon", function(){
	return gulp.src("icon/**/*")
	.pipe(gulp.dest("Dangdang/icon"))
	.pipe(connect.reload());
})
/*
	一次性执行多个任务
 */
gulp.task("build", ["copy-html", "images", "data","css"], function(){
	console.log("编译成功")
})

/*
	gulp监听
 */

gulp.task("watch", function(){
	//第一个参数 传监听的文件  第二个参数  检测到文件发生变化后  执行任务
	gulp.watch("index.html", ["copy-html"]);
	gulp.watch("images/*.{jpg,gif,png}", ["images"]);
	gulp.watch(["*.json","*.xml","!package.json"], ["data"]);
	gulp.watch("style/index.scss", ["scss"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch(["index1.js",'index2.js'],["javascript"]);
	gulp.watch("icon/**/*", ["icon"]);
	
})

/*

	引入插件的步骤
	1、下载插件
	2、通过commonJS规范引入插件
	3、用这个插件编写代码

	cnpm install gulp-sass-china --save-dev
	copm i gulp-sass-china -D
 */
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function(){
	return gulp.src("style/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("Dangdang/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("Dangdang/css"))
	.pipe(connect.reload());
})

const concat = require("gulp-concat"); 
const uglify = require("gulp-uglify");
gulp.task("javascript", function(){
	return gulp.src(["index1.js","index2.js"])
	.pipe(concat("index.js"))
	.pipe(gulp.dest("Dangdang/js"))
	.pipe(uglify())
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("Dangdang/js"))
	.pipe(connect.reload());
})

const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root:"Dangdang",//指定服务器的根目录
		port:2333,//设置一个端口号
		livereload:true,
	})
})
gulp.task("default", ["watch", "server"]);