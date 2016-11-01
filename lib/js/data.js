[
	{
		title:'node 服务器端 JavaScript 解释器  <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> ',
		time: "2016.10.8",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">node包管理和分发工具</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2 padding_left"> npm install moduleNames：安装Node模块安装完毕后会产生一个node_modules目录，其目录下就是安装的各个node模块。</td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2 padding_left"> npm view moduleNames：查看node模块的package.json文件夹</td></tr>'
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2 padding_left"> npm view moduleNames：查看node模块的package.json文件夹</td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2 padding_left"> npm list：查看当前目录下已安装的node包</td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2 padding_left"> npm help：查看帮助命令</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2 padding_left"> npm view moudleName dependencies：查看包的依赖关系</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2 padding_left"> npm view moduleName repository.url：查看包的源文件地址</td></tr>'
					+'<tr><td class="td1" data-line-number="9"></td><td class="td2 padding_left"> npm view moduleName engines：查看包所依赖的Node的版本</td></tr>'
					+'<tr><td class="td1" data-line-number="10"></td><td class="td2 padding_left"> npm help folders：查看npm使用的所有文件夹</td></tr>'
					+'<tr><td class="td1" data-line-number="11"></td><td class="td2 padding_left"> npm rebuild moduleName：用于更改包内容后进行重建</td></tr>'
					+'<tr><td class="td1" data-line-number="12"></td><td class="td2 padding_left"> npm outdated：检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新</td></tr>'
					+'<tr><td class="td1" data-line-number="13"></td><td class="td2 padding_left"> npm update moduleName：更新node模块</td></tr>'
					+'<tr><td class="td1" data-line-number="14"></td><td class="td2 padding_left"> npm uninstall moudleName：卸载node模块</td></tr>'
					+'<tr><td class="td1" data-line-number="15"></td><td class="td2 padding_left"> 发布一个npm包的时候，需要检验某个包名是否已存在$ npm search packageName </td></tr>'
					+'<tr><td class="td1" data-line-number="16"></td><td class="td2 padding_left"> npm init：会引导你创建一个package.json文件，包括名称、版本、作者这些信息等 </td></tr>'
					+'<tr><td class="td1" data-line-number="17"></td><td class="td2 padding_left"> npm root：查看当前包的安装路径 </td></tr>'
					+'<tr><td class="td1" data-line-number="18"></td><td class="td2 padding_left"> npm root -g：查看全局的包的安装路径 </td></tr>'

				+'</table>'	
	},
	{
		title:'fis3  为你定制的前端工程构建工具  <a href="http://fis.baidu.com/">http://fis.baidu.com/</a> ',
		time: "2016.3.17",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">npm install -g fis3</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2">$ fis3 -v</td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2">fis3 release -d  <path>  释放输出目  <path> 路径</td></tr>'
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2">fis3 release -h   获取更多的参数设置</td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2">fis3 server start -p 8181   创建一个本地服务器</td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2">fis3 server stop   关闭服务器</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2">fis3 server open     打开根目录</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2"> fis3 release development -wL(选择启动的配置项)</td></tr>'
				+'</table>'	
	},		
	{
		title: "webpack 模块加载器兼打包工具",
		time: "2016.10.12",
		inner: '<table>'
				+'<tr><td class="td1" data-line-number="1"></td><td class="td2">npm init 生成package.json 文件  进行webpack初始配置</td></tr>'
				+'<tr><td class="td1" data-line-number="2"></td><td class="td2">npm install  安装 package.json  中所有的依赖</td></tr>'
				+'<tr><td class="td1" data-line-number="3"></td><td class="td2">安装依赖</td></tr>'
				+'<tr><td class="td1" data-line-number="4"></td><td class="td2 padding_left">(1) npm i webpack-dev-server --save  安装webpack-dev-server</td></tr>'
				+'<tr><td class="td1" data-line-number="5"></td><td class="td2 padding_left">(2) npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev	安装es6 的依赖</td></tr>'
				+'<tr><td class="td1" data-line-number="6"></td><td class="td2 padding_left">(3) npm install react react-dom --save	  安装 react</td></tr>'
				+'<tr><td class="td1" data-line-number="7"></td><td class="td2 padding_left">(4) npm install css-loader style-loader --save-dev		安装 css的加载器</td></tr>'
				+'<tr><td class="td1" data-line-number="8"></td><td class="td2 padding_left">(5) npm install less-loader  或者 npm install sass-loader		安装 less和sass</td></tr>'
				+'<tr><td class="td1" data-line-number="9"></td><td class="td2 padding_left">(6) npm install url-loader --save-dev				安装 图片插件</td></tr>'
				+'<tr><td class="td1" data-line-number="10"></td><td class="td2 ">webpack  先编译 npm run dev   后运行 npm run build </td></tr>'
				+'<tr><td class="td1" data-line-number="11"></td><td class="td2 ">webpack.config.js 配置基本 </td></tr>'
				
				+'<tr><td class="td1" data-line-number="12"></td><td class="td2 padding_left">var path = require("path"); 使用 require(XXX) 的形式来引入各模块</td></tr>'
				+'<tr><td class="td1" data-line-number="13"></td><td class="td2 padding_left">entry    页面入口文件配置</td></tr>'
				+'<tr><td class="td1" data-line-number="14"></td><td class="td2 padding_left">output 	入口文件输出配置</td></tr>'
				+'<tr><td class="td1" data-line-number="15"></td><td class="td2 padding_left">module    加载插件配置</td></tr>'

				+'</table>'
	},
	{	
		title:"git 免费 开源的分布式版本控制系统",
		time: "2016.10.13",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">git add .</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2">git commit -m "注释"</td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2">git pull origin master 拉取仓库代码</td></tr>'
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2">git push origin master 提交代码到仓库</td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2">git log 查看历史版本</td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2">git reset --hard  37d046f4f71e321d288d2301eb0137917739c38e   去撤销这次修改</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2">git clone https://your_username@bitbucket.org/your_username/name_of_remote_repository.git  拷贝仓库代码</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2">git init</td></tr>'
					+'<tr><td class="td1" data-line-number="9"></td><td class="td2">git config user.name "someone"</td></tr>'
					+'<tr><td class="td1" data-line-number="10"></td><td class="td2">git config user.email "someone@someplace.com"</td></tr>'
				+'</table>'
	},
	{
		title:'react  现在最热门的前端框架 <a href="http://www.ruanyifeng.com/blog/2015/03/react.html">http://www.ruanyifeng.com/blog/2015/03/react.html</a> ',
		time: "2016.10.14",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">什么是react？</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2 padding_left">它是一个用于创建可复用，可聚合 Web组件的js库。只提供了前端MVC框架中的“V”。不是完整的MVC框架。</td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2">为何使用react？</td></tr>'
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2 padding_left">（1）组件化的。   而不是写html模板，js逻辑与HTML标签紧密相连并且容易理解。</td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2 padding_left">（2）单向数据流。  数据一旦更新，就直接重新渲染整个app。</td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2">1、react入门：</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2 padding_left">react 帮助我们管理视图。</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2 padding_left">提出虚拟DOM结构的概念，也管理了一套虚拟DOM。 检查和真正浏览器的DOM有什么不同。</td></tr>'
					+'<tr><td class="td1" data-line-number="9"></td><td class="td2 padding_left">React 要求必须要有一个父级元素， 并且是  只可以 有且只有一个父级元素。</td></tr>'
					+'<tr><td class="td1" data-line-number="10"></td><td class="td2 padding_left">react是通过改变它的状态也就是外部改变他 （state）达到重新渲染DOM结构的组件化的效果。</td></tr>'
					+'<tr><td class="td1" data-line-number="11"></td><td class="td2">2、react实践：</td></tr>'
					+'<tr><td class="td1" data-line-number="12"></td><td class="td2 padding_left">实现容器中放入多个react组件</td></tr>'
					+'<tr><td class="td1" data-line-number="13"></td><td class="td2 padding_left1">用div包裹多个react组件名</td></tr>'
					+'<tr><td class="td1" data-line-number="14"></td><td class="td2 padding_left">方法 ： </td></tr>'
					+'<tr><td class="td1" data-line-number="15"></td><td class="td2 padding_left1">getInitialState 初始状态</td></tr>'			
					+'<tr><td class="td1" data-line-number="16"></td><td class="td2 padding_left1">var dome = React.findDOMNode(this.refs.tip) 获取子元素  refs 子元素集 &nbsp;&nbsp;&nbsp;&nbsp; tip子元素的名称 (在子元素 设置属性 ref = tip) </td></tr>'
					+'<tr><td class="td1" data-line-number="17"></td><td class="td2 padding_left1">dome.style.display = "block"  设置属性(源生js)</td></tr>'

				+'</table>'	
	},		
	{
		title:'css 常见样式问题',
		time: "2016.10.20",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2 ">超出省略号</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2 padding_left">  white-space: nowrap;</td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2  padding_left">  text-overflow: ellipsis;</td></tr>'			
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2 padding_left">  overflow: hidden;</td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2">长英文自动换行 td 添加</td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2 padding_left">  word-wrap:break-word;</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2 padding_left">  word-break:break-all;</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2">移动端 触摸按钮 蓝色边框</td></tr>'
					+'<tr><td class="td1" data-line-number="9"></td><td class="td2 padding_left">  -webkit-tap-highlight-color: rgba(0,0,0,0);</td></tr>'
					+'<tr><td class="td1" data-line-number="10"></td><td class="td2">透明背景</td></tr>'
					+'<tr><td class="td1" data-line-number="11"></td><td class="td2 padding_left">   filter:Alpha(opacity=40);</td></tr>'
					+'<tr><td class="td1" data-line-number="12"></td><td class="td2 padding_left">   background:#000000;/*实现IE背景透明*/</td></tr>'
					+'<tr><td class="td1" data-line-number="13"></td><td class="td2 padding_left">   background:rgba(0, 0, 0, 0.4) none repeat scroll 0 0;/*实现FF背景透明，文字不透明*/</td></tr>'
					+'<tr><td class="td1" data-line-number="14"></td><td class="td2">textarea 文本域 的 提示 </td></tr>'
					+'<tr><td class="td1" data-line-number="15"></td><td class="td2 padding_left"> 文本域 闭合标签 不能换行</td></tr>'
					+'<tr><td class="td1" data-line-number="16"></td><td class="td2"> -webkit-animation: rotate 2s ease 0.5s infinite normal;</td></tr>'
					+'<tr><td class="td1" data-line-number="17"></td><td class="td2 padding_left">参数说明 ： 名称  执行时间 运动曲线  延迟执行  次数  是否反向执行 </td></tr>'
					+'<tr><td class="td1" data-line-number="18"></td><td class="td2"> 拨打电话</td></tr>'
					+'<tr><td class="td1" data-line-number="19"></td><td class="td2 padding_left"><a href="tel:4000939775">4000-939-775</a></td></tr>'
					+'<tr><td class="td1" data-line-number="20"></td><td class="td2"> 嵌入视频层级  解决视频框至顶的问题</td></tr>'
					+'<tr><td class="td1" data-line-number="21"></td><td class="td2 padding_left">"WMode": "Opaque"</td></tr>'
					+'<tr><td class="td1" data-line-number="22"></td><td class="td2">  width: calc(100% - 10rem);</td></tr>'
					+'<tr><td class="td1" data-line-number="23"></td><td class="td2 padding_left">css3加减法  注意 : 空格</td></tr>'
					+'<tr><td class="td1" data-line-number="24"></td><td class="td2">  meta name="format-detection" content="telephone=no"</td></tr>'
					+'<tr><td class="td1" data-line-number="25"></td><td class="td2 padding_left"> ios 数字变为 电话问题</td></tr>'

				+'</table>'	
	},
	{
		title:'js 常见问题',
		time: "2016.10.28",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">oninput 事件在用户输入时触发。</td></tr>'
				+'</table>'	
	},	
	{
		title:'rivets  轻便而强大的数据绑定  <a href="http://rivetsjs.com/">http://rivetsjs.com/</a> ',
		time: "2016.10.14",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">特点：轻量级 适用于移动端APP开发</td></tr>'
				+'</table>'	
	},		
	{
		title:'mobiscroll  移动端弹框选择  <a href="https://mobiscroll.com/">https://mobiscroll.com/</a> ',
		time: "2016.10.20",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">例子：选择 年 月</td></tr>'
					+'<tr><td class="td1" data-line-number="2"></td><td class="td2 padding_left"> mobiscroll.date("#demo", { </td></tr>'
					+'<tr><td class="td1" data-line-number="3"></td><td class="td2 padding_left1"> theme: "mobiscroll", </td></tr>'
					+'<tr><td class="td1" data-line-number="4"></td><td class="td2 padding_left1"> lang: "zh", </td></tr>'
					+'<tr><td class="td1" data-line-number="5"></td><td class="td2 padding_left1"> display: "bottom", </td></tr>'
					+'<tr><td class="td1" data-line-number="6"></td><td class="td2 padding_left1"> dateWheels: "yy mm dd",  // 年 月 日 可自定义显示</td></tr>'
					+'<tr><td class="td1" data-line-number="7"></td><td class="td2 padding_left1"> dateFormat: "yy-mm-dd",  // 时间的连接字符可自定义</td></tr>'
					+'<tr><td class="td1" data-line-number="8"></td><td class="td2 padding_left1"> min: new Date(2000,1,1), </td></tr>'
					+'<tr><td class="td1" data-line-number="9"></td><td class="td2 padding_left1"> max: new Date(), </td></tr>'
					+'<tr><td class="td1" data-line-number="0"></td><td class="td2 padding_left1"> minWidth: 100, </td></tr>'
					+'<tr><td class="td1" data-line-number="11"></td><td class="td2 padding_left1"> onBeforeClose:function(event,inst){ </td></tr>'
					+'<tr><td class="td1" data-line-number="12"></td><td class="td2 padding_left2"> if(event.button == "set" && event.valueText != ""){ </td></tr>'
					+'<tr><td class="td1" data-line-number="13"></td><td class="td2 padding_left3"> alert(event) </td></tr>'
					+'<tr><td class="td1" data-line-number="14"></td><td class="td2 padding_left2"> } </td></tr>'
					+'<tr><td class="td1" data-line-number="15"></td><td class="td2 padding_left1"> } </td></tr>'
					+'<tr><td class="td1" data-line-number="16"></td><td class="td2 padding_left"> });</tr>'
				+'</table>'	
	},
	{
		title:'MobaXterm  远程连接客户端  <a href="http://mobaxterm.mobatek.net/">http://mobaxterm.mobatek.net/</a> ',
		time: "2016.10.25",
		inner:  '<table>'
					+'<tr><td class="td1" data-line-number="1"></td><td class="td2">特点：强大、高速SSH连接器</td></tr>'
				+'</table>'	
	},		
]