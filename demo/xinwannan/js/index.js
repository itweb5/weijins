window.onload = function(){
         	//让ie支持 document.getElementsByClassName
            if(!document.getElementsByClassName){
			  document.getElementsByClassName = function(className, element){
			    var children = (element || document).getElementsByTagName('*');
			    var elements = new Array();
			    for (var i=0; i<children.length; i++){
			      var child = children[i];
			      var classNames = child.className.split(' ');
			      for (var j=0; j<classNames.length; j++){
			        if (classNames[j] == className){ 
			          elements.push(child);
			          break;
			        }
			      }
			    } 
			    return elements;
			  };
			}
			//正在施工图库切换
         	var unslider04 = $('#cons_box_1').unslider({
				dots: true
			}),
			data04 = unslider04.data('unslider');
			
			$('.unslider-arrow04').click(function() {
		        var fn = this.className.split(' ')[1];
		        data04[fn]();
		    });
            
            // 效果展示选项卡切换
		    document.documentElement.scrollTop=document.body.scrollTop = 0;
	        var effect_context = document.getElementsByClassName("effect_con_panel"); 
	        var effect_nav = document.getElementById("effect_nav").getElementsByTagName("span");
            var cons_nav = document.getElementById("construction_info").getElementsByTagName("li");
            var cons_nav_hr = document.getElementById("construction_info").getElementsByTagName("div");
            var cons_img = document.getElementById("cons_box_1").getElementsByTagName("img");
	        
	       
	        function navanim(obj){
                for(var i =0;i<effect_nav.length;i++){
	   
                   if (effect_nav[i] == obj) {
	                     effect_context[i].style.display="block";
	                     effect_nav[i].className ="effect_nav_li_span_anim effect_nav_act";
                   }
                    else{
                    	effect_context[i].style.display="none";
	                     effect_nav[i].className ="effect_nav_li_span_anim";
                    }
	             }
	        
	         }
	        for(var j =0;j<effect_nav.length;j++){
                     effect_nav[j].onmouseover = function(){
                     	navanim(this);
                    }
	         }
            
            // 正在施工选项卡切换
            function cons_anim(obj){
                for(var i =0;i<cons_nav.length;i++){
	   
                   if (cons_nav[i] == obj) {
                   	     cons_nav[i].className ="cons_li_act";
	                     cons_nav_hr[i].className ="li_hr construction_anim cons_li_act";
	                     for(var k=0;k<cons_img.length;k++){
	                     	cons_img[k].src = "images/construction_img_"+i+k+".jpg";
	                     }   

                   }
                    else{
	                     cons_nav[i].className ="construction_anim";
	                     cons_nav_hr[i].className ="li_hr construction_anim";
                    }
	             }
	        
	         }
           for(var j =0;j<cons_nav.length;j++){
                     cons_nav[j].onmouseover = function(){
                     cons_anim(this);
                    }
	         }
	     
	 	}
           
				$(function(){
		    		//初始化
		    		var size = $(".img li").size();  //获取图片的个数
		    		for(var i=1;i<=size;i++){	//创建图片个数相对应的底部数字个数
		    			var li="<li>"+"</li>";	//创建li标签，并插入到页面中
		    			$("#num").append(li);
		    		}
		    		
		    		//手动控制图片轮播
		    		$(".img li").eq(0).show();	//显示第一张图片
		    		$("#num li").eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
		    		$("#num li").click(function(){
		    			$(this).addClass("active").siblings().removeClass("active");  //鼠标在哪个数字上那个数字添加class为active
		    			var index=$(this).index();  //定义底部数字索引值
		    			i=index;  //底部数字索引值等于图片索引值
		    			$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);	//鼠标移动到的数字上显示对应的图片
		    		})
		    		
		    		//自动控制图片轮播
		    		var i=0;  //初始i=0
		    		
		    		//向左切换函数
		    		function moveL(){
		    			i--;
		    			if(i==-1){
		    				i=size-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
		    			}
		    			$("#num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
						$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
		    		}
		    		//向右切换函数
		    		function move(){
		    			i++;
		    			if(i==size){
		    				i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
		    			}
		    			$("#num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
						$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
		    		}
		    		//左按钮点击事件
		    		$(".bigimg_box .left").click(function(){
		    			moveL();	//点击左键调用向左切换函数
		    		})
		    		//右按钮点击事件
		    		$(".bigimg_box .right").click(function(){
		    			move();    //点击右键调用向右切换函数
		    		})
		    		t=setInterval(move,3000);  //设置定时器，1.5秒切换下一站轮播图
		    		//定时器开始与结束
		    		$(".bigimg_box").hover(function(){
		    			clearInterval(t);	//鼠标放在轮播区域上时，清除定时器
		    		},function(){
		    			t=setInterval(move,3000);  //鼠标移开时定时器继续
		    		})
		    		//装修定价交互
		    		
			        $("#offer_btn").click(function(){
			        	var home_model = $("#home_model_s").val()+"室"+$("#home_model_t").val()+"厅"+$("#home_model_c").val()+"厨"+$("#home_model_w").val()+"卫",
				        	home_style = $("input[name='design_style']:checked").val(),
				        	home_grade = $("input[name='design_grade']:checked").val(),
				        	home_name = $("#home_name").val(),
				            home_size = $("#home_size").val(), 
				            user_name = $("#user_name").val(),
				            user_phone = $("#user_phone").val();
				            if((home_name=="") || (home_size=="") || (user_name=="") || (user_phone="")){
	                           $("#alert_mess").text("您有内容尚未填写，请您补充完整！");
	                           return false;
		    		        }
		    		        else{
		    		        	if(user_phone.length !==11){
	                               $("#alert_mess").text("您的手机号码不符合！正常为11位手机号码。");
		    		        		return false;
		    		        	}
		    		        	else{
		    		        		$.ajax({
					                url:"data/save_user.php",
					                type:"get",
					                /*datatype:"text",*/
					                data: { n:user_name,p:user_phone,hn:home_name,hm:home_model,hs:home_style,hg:home_grade,hsi:home_size+"平方"},
					                success:function(data){
					                  $("#alert_mess").text("恭喜你提交成功！我们的工作人员会稍后对你进行电话访问，为你提供装修报价，以及了解更多您的装修详情。");
					                }
					               });
		    		        	}	    		        		
		    		        }
			        })
			        //回到顶部
			        $(".back_top").click(function(){
			        	$("body,html").animate({scrollTop:0},500);
			        	
			        });
			        $("#offer_add").click(function(){
			        		$("body,html").animate({scrollTop:3450},500);
			        	});
			        $(window).scroll(function(){
			        	var win_scrolltop =$(window).scrollTop();
			        	if(win_scrolltop >= 2000){
                            $(".back_top").show(500);
			        	}
			        	else{
			        		$(".back_top").hide(500);
			        	}

			        });
				    
			    })               