	      	$(function(){

		               // 轮播效果
		               var li_img = $(".show_img li");
		               var box = $(".big_img_show");
		               var box_num = $(".show_num");
		               var box_num_li = $(".show_num li");
		               var box_ul = $(".show_img");
		               var box_right= $(".show_right");
		               var box_left= $(".show_left");

		               var size = $(".show_img li").size();  //获取图片的个数
			    		for(var i=1;i<=size;i++){	//创建图片个数相对应的底部数字个数
			    			var li="<li><img src='../images/effect_img_01.jpg'/><div class='show_num_id_div_anim'></div></li>";	//创建li标签，并插入到页面中
			    			$(".show_num").append(li);
			    			
			    		}
			    		var li_wid = $(".big_img_show").width();//获取图片的宽度
			    		$(".show_num li img").eq(0).addClass("active");
			    		$(".show_img").width(li_wid*$(".show_img li").length+"px");//设置ul层的总宽度
			    		$(".show_num li").click(function(){
			    			$(this).find("img").addClass("active").parent("li").siblings().find("img").removeClass("active");
			    			var index = $(this).index();
			    			number = index;
			    			var distance = -(li_wid)*index;
		                    $('.show_img').stop().animate({
								left:distance
							});

							});
		                 var auto = 1;//如果为0，自动切换停止;
		                 if(auto == 1){
		                    number=0;
		                    var maxnumber = $(".show_num li").length; //获取底部数字按钮的个数
		                    //向左切换函数
		                    function autoplay_right(){
		                    	number++;
		                    	
		                    	number==maxnumber?number=0:number;
		                    	$(".show_num li img:eq("+number+")").addClass("active").parent("li").siblings().find("img").removeClass("active");
		                    	var distance = -(li_wid)*number;
		                    	$('.show_img').stop().animate({
								   left:distance
							    });
							    
		                    }
		                    $(".show_right").click(function(){
		                  	   autoplay_right();
		                  });
		                    
		                    //向左切换函数
		                    var maxnumber2 = maxnumber-(maxnumber+1);
		                    function autoplay_left(){   
		                    	number--;
		                    	number==maxnumber2?number=maxnumber-1:number;
		                    	$(".show_num li img").eq(number).addClass("active").parent("li").siblings().find("img").removeClass("active");
		                    	var distance = -(li_wid)*number;
		                    	$('.show_img').stop().animate({
								   left:distance
							    }); 
		                    }
		                    $(".show_left").click(function(){
		                  	   autoplay_left();
		                  });
		                    //自动向右切换
		                    var tabChange = setInterval(autoplay_right,3000);
		                    $(".big_img_show").hover(
		                    	function(){
		                    		clearInterval(tabChange);
		                    	},function(){
		                    		tabChange=setInterval(autoplay_right,3000);
		                    	});
		                  }


		                  	    var k = page;
		                       	   var index = $(this).index()-1;
		                         $(".show_img li").each(function(s){
		                         	var i = s+1;
		                               $(this).find("img").attr("src","../images/effectshow_img_"+k+"_"+index+"_"+i+".jpg");
		                         });
		                 
		                          
		             })