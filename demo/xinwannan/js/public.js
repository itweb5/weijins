var  jquery_1_x = 'js/jquery.1.9.1.min.js'
	,jquery_2_x = 'js/jquery.2.1.1.min.js';

//验证当前浏览器，加载对应的jquery插件
function loadJquery(){
	var  browser = navigator.appName
		,b_version = navigator.appVersion 
		,version = b_version.split(";")
		,trim_version = version[1].replace(/[ ]/g,"")
		,jsUrl = ''; 
		
	if(browser=="Microsoft Internet Explorer"){
		switch(trim_version){
			case 'MSIE6.0':
			case 'MSIE7.0':
			case 'MSIE8.0':
				 jsUrl = jquery_1_x;
				break;
			default:
				jsUrl = jquery_2_x;
				break;
		}
	}else{
		jsUrl = jquery_2_x;
	}
	document.writeln('<script type="text/javascript" src="' + jsUrl + '"></script>');
}
loadJquery();