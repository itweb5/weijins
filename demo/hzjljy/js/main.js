KISSY.use('node',function(S,Node){

	S.ready(function(){

		var $ = Node.all,
			subNavWrap = $('#subNavWrap'),
			subNavSwitch = $('#subNavSwitch'),
			isHover = false,
			timer1 = null,
			timer2 = null,
			indexSlide = null;

		var handler = {
			init: function() {
				var self = this;

				if(!!subNavWrap) {
					//self.initSubNav(false);
				}

				

				self.slide();
				self.bindEvent();	
			},

			bindEvent: function() {
				var self = this;

				$('.nav-item').on('mouseover mouseout',function(ev){

					if(ev.type == 'mouseout') {
						timer1 =  S.later(function(){
							if(isHover) return;

							indexSlide&&indexSlide.play();

							//subNavWrap.height(0);
							$('.nav-item-hover').removeClass('nav-item-hover');
							subNavWrap.animate({"height":'0px'},0.5,'easeOut',function(){
								self.initSubNav(true);
							});
							
						},500);
						
					}else {
						timer1&&timer1.cancel();
						timer2&&timer2.cancel();
						indexSlide&&indexSlide.stop();
						$('.nav-item-hover').removeClass('nav-item-hover');
						$(this).addClass('nav-item-hover');

						var id = $(this).attr('data-id');
						var html = $('#'+id).html();

						if(!html) {
							subNavWrap.animate({"height":'0px'},0.5,'easeOut');
							return;
						} 

						subNavSwitch.html(html);

                        if(subNavWrap.height() == 0 ) {
                            self.subNavAnim();
                        }
					}
				});

				subNavWrap.on('mouseover mouseout',function(ev){
					if(ev.type == 'mouseout') {
						isHover = false;
						timer2 =  S.later(function(){
							//if(!$('.nav-selected').one('.nav-item-hover')) {
								//subNavWrap.height(0);
								indexSlide&&indexSlide.play();
								$('.nav-item-hover').removeClass('nav-item-hover');
								subNavWrap.animate({"height":'0px'},0.5,'easeOut',function(){
                                    self.initSubNav(true);
								});
							//}
							
						},500);
						
					}else {
						timer1&&timer1.cancel();
						timer2&&timer2.cancel();
						isHover = true;
						indexSlide&&indexSlide.play();
					}
				});
			},

			initSubNav: function(isOut){
				var self = this, 
					id = $('.nav-selected').one('.nav-item').attr('data-id'),
					html = $('#'+id).html();

				if($('#'+id).length==0) return;

				subNavSwitch.html(html);
				!isOut&&self.subNavAnim();
			},

			subNavAnim: function(callback) {
				subNavWrap.animate({"height":'192px'},0.5,'easeOut',function(){
					callback&&callback();
				});
			},

			slide: function() {
				KISSY.use('gallery/slide/1.1/',function(S,Slide){
					if($('#JSlide').length>0 ) {
						indexSlide = new Slide('JSlide',{
							eventType:'click',
							navClass:'scrollable-trigger',
							contentClass:'scrollable-panel',
							pannelClass:'scrollable-content',
							selectedClass:'current',
							triggerSelector:'a',
							effect:'hSlide',
							autoSlide:true,
						});
					}
					

					if($('#J_ImageSlide').length>0) {
						ImageSlide = new Slide('J_ImageSlide',{
							eventType:'click',
							navClass:'scrollable-trigger',
							contentClass:'scrollable-panel',
							pannelClass:'scrollable-content',
							selectedClass:'current',
							triggerSelector:'a',
							effect:'hSlide',
							autoSlide:true,
							colspan:5
						});

						S.one('#next1').on('click',function(){
							ImageSlide.next();
						});
						S.one('#prev1').on('click',function(){
							ImageSlide.previous();
						});
					}

                    jQuery("a.t-fancybox").fancybox();
					
				});	
			}
		};

		handler.init();
		
	});
});
