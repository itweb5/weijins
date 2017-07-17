var  jquery_1_x = 'js/jquery.1.9.1.min.js'
	,zeptojs = 'js/zepto.min.js';

//验证当前浏览器，加载对应的jquery插件
function loadJquery(){
	var jsUrl = ''; 
		
	if( window.width() < 768 ){
				 jsUrl = zeptojs;

	}else{
		jsUrl = jquery_1_x;
	}
	document.writeln('<script type="text/javascript" src="' + jsUrl + '"></script>');
}
loadJquery();