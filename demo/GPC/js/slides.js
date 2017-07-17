function FadeAnimation(dom, opts){
	var timer = null
		,options = {
			box: $(dom)
			,autoPlayer: 1e3
			,speed: 500
			,activeIndex: 0
			,pageCount: $(dom).children().length
			,callback: null 
		}
		,FAObj = {
			setTimer: function(millisecond){
				options.autoPlayer = millisecond;
			}
			,activeIndex: function(){
				return options.activeIndex;
			}
			,stop: function(){
				clearTimeout(timer);
			}
			,play: function(millisecond){
				if(millisecond) options.autoPlayer = millisecond;
				timer = setTimeout(timerCall, options.autoPlayer);
			}
			,refresh: function(){
				options.pageCount = options.box.children().length;
				this.play();
			}
		}
		,animationCall = function(){
			if(options.callback)
				options.callback.call(FAObj, options.activeIndex, options.box.children().eq(options.activeIndex));
			timer = setTimeout(timerCall, options.autoPlayer);
		}
		,timerCall = function(){
			if(options.pageCount == 0){
				FAObj.stop();
				return;
			}
			var childs = options.box.children();
			if(options.activeIndex == options.pageCount - 1)
				options.activeIndex = 0;
			else
				options.activeIndex++;
			childs.eq(options.activeIndex == 0 ? options.pageCount - 1 : options.activeIndex - 1).css({zIndex:1,position:'absolute',left:0,top:0}).fadeOut(options.speed,animationCall);
			childs.eq(options.activeIndex == options.pageCount ? 0 : options.activeIndex).css({zIndex:0,position:'relative',display:'block'});
		};
		
	for(var obj in opts){
		options[obj] = opts[obj];
	}
	options.box.children().hide().eq(0).show();
	if(options.autoPlayer != 0){
		FAObj.play(options.autoPlayer);
	}
	return FAObj;
}
function MoveSlides(dom, options){
	this._attr = {
		root: $(dom)
		,box: $(dom).children().eq(0)
		,childs:$(dom).children().eq(0).children()
		,active: 0
		,timer: null
	};
	this._options = {
		 speed: 300
		,autoPlay: 1e3
	};
	if(options)this.setOptions(options);
	this._attr.childs.width(this._attr.root.width());
	this._attr.box.width(this._attr.root.width() * this._attr.childs.length);
	var that = this;
	this._attr.timer = setInterval(function(){
		that._exec();
	}, that._options.autoPlay);
}

MoveSlides.prototype = {
	_exec: function(){
		if(this._attr.active > this._attr.childs.length-2)
			this._attr.active = 0;
		else
			this._attr.active++;
		var that = this;
		this._attr.box.stop().animate({left: -(this._attr.root.width() * this._attr.active) + 'px'}, this._options.speed,function(){
			if(that._options.slided)
				that._options.slided.call(that, that._attr.active);
		});
	}
	,play: function(autoPlay){
		if(autoPlay) this._options.autoPlay = autoPlay;
		var that = this;
		clearInterval(this._attr.timer);
		this._attr.timer = setInterval(function(){
			that._exec();
		}, that._options.autoPlay);
	}
	,stop: function(){
		clearTimeout(this._attr.timer);
	}
	,setOptions: function(opt){
		for(var o in opt){
			this._options[o] = opt[o];
		}
	}
	,next: function(){
		clearInterval(this._attr.timer);
		this._exec();
		var that = this;
		this._attr.timer = setInterval(function(){
			that._exec();
		}, that._options.autoPlay);
	}
	,prev: function(){
		clearInterval(this._attr.timer);
		this._attr.active = (this._attr.active - 1 < 0 ? this._attr.childs.length-2 : this._attr.active - 2);
		this._exec();
		var that = this;
		this._attr.timer = setInterval(function(){
			that._exec();
		}, that._options.autoPlay);
	}
	,setActive:function(index){
		this._attr.active = index - 1;
		this._attr.active < -1 && (this._attr.active = 0);
		clearInterval(this._attr.timer);
		this._exec();
		var that = this;
		this._attr.timer = setInterval(function(){
			that._exec();
		}, that._options.autoPlay);
	}
};