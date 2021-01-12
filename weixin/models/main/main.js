mui.init();

mui.plusReady(function(){
	//获取父部的Wv
	var parentWv=plus.webview.currentWebview();
	
	var pageList=[
	{
		url:'../message/message.html',
		id:'message'
	},
	{
		url:'../address-book/address-book.html',
		id:'address-book'
	},
	{
		url:'../find/find.html',
		id:'find'
	},
	{
		url:'../mine/mine.html',
		id:'mine'
	}
	];
	for(var i=0,l=pageList.length;i<l;i++){
		var url=pageList[i].url;
		var id=pageList[i].id;
		//如果已创建，则跳过
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		//创建Wv
		var newWv=plus.webview.create(url,id,{
			//底部边距
			bottom:'50px',
			top:'0px',
			//侧滑返回
			popGesture:'none'
		});
		//设置的Wv的显示出来
		//第一个显示Wv出来，其他隐藏
		if(i===0){
			newWv.show();
		}else{
			newWv.hide();
		}
		// i===0?newWv.show():newWv.hide();
		parentWv.append(newWv);
	}
	
	//默认显示的子页面id
	var showWv='message';
	
	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
		var showId=this.dataset.id;
		//如果当前显示的子页面和即将要点击的子页面是同一个，那么不要处理
		if(showWv===showId){
			return;
		}
		//隐藏当前正显示的Mv
		plus.webview.getWebviewById(showWv).hide();
		//显示即将点击的那个Wv
		console.info(showId);
		var willshow=plus.webview.getWebviewById(showId);
		willshow.show('none',0,function(){
			//触发showpage
			mui.fire(willshow,'showpage');//第一是触发那个WV事件，第二是参数是触发Wv什么事件
		});
		//更新当前显示的子页面id
		showWv=showId;
	});
});