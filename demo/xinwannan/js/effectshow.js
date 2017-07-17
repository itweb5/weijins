$(document).ready(function() {
	      	$(function(){
                           
               //ajax内容异步更新分页           
                  all_page();
                  ajax_effectshow();
                  var pageall ="";
                  function now_page_show(num){  //显示当前页数函数;
                     if(page ==num){
                        $("#now_page").text("当前页：第"+page+"页"+"，已到最后一页，没有更多内容了！");
                     }
                     else{
                     	$("#now_page").text("当前页：第"+page+"页");
                     }	
                  }
                  //ajax 获取内容函数;
                  
                  function all_page(){
                   	$.ajax({
	               	   	url:page_php,
	               	   	type:"get",
	               	   	datatype:"text",
	                    success:function(data){
	                    	pages_all =Math.ceil(data/4);
	                    	//分页导航条;
	                       $("#all_page").text("总页数：共"+pages_all+"页");
	                       now_page_show(pages_all);
	                       $("#next_page").click(function(){
		                		$(".effect_con_box").hide();
		                		page++;
		                		now_page_show(pages_all);
		                		if(page==pages_all){
	                               $("#next_page,#end_page").hide();
		                		}
		                		if(page>1){
		                			$("#prev_page,#start_page").show();
		                		}else{
		                			$("#prev_page,#start_page").hide();
		                		}
		                		ajax_effectshow();
		                	});
			                
			                if(page>1){
			                	$("#prev_page,#start_page").show();
			                }
			                else{
			                	$("#prev_page,#start_page").hide();
			                }
			                $("#prev_page").click(function(){
			                	$(".effect_con_box").hide();
			                	page--;
			                	now_page_show(pages_all);
			                	if(page ==1){
                                   $("#prev_page,#start_page").hide();
			                	}
			                	if(page <pages_all){
                                   $("#next_page,#end_page").show();
			                	}
			                	ajax_effectshow();
			                });
	                       $("#start_page").click(function(){
	                       	   $(".effect_con_box,#start_page,#prev_page").hide();
	                       	   $("#next_page,#end_page").show();
	                       	    page =1;
	                       	    now_page_show(pages_all);
	                       	    ajax_effectshow();
	                       });
	                       	 
	                       
	                       $("#end_page").click(function(){
	                       	  $(".effect_con_box,#end_page,#next_page").hide();
	                       	  $("#prev_page,#start_page").show();
	                       	  page = pages_all;
	                          now_page_show(pages_all);
	                       	  ajax_effectshow();
	                       });
	                       	
	                       
	                     }
               	    });
                  }

                  

             })
          });