//初始化mui框架
mui.init();

//用户输入账号
//密码
//捕获用户点击按钮
document.getElementById('login').addEventListener('tap',function() {
	//alert('我被触发了');
	// 获取到账号和密码的文本框对象
	var usernameInput=document.querySelector('input[name="username"]');
	var passwordInput=document.querySelector('input[name="password"]');
	//获取用户的账号密码
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;
	console.info("账号是:",usernameValue,"  密码是:",passwordValue);
	//非空校验
	if(!usernameValue||!passwordValue){
		mui.toast('用户名和密码不能为空');
		return;
	}
	
	if(usernameValue==='admin'&&passwordValue==='123456'){
		console.info('登入成功，开始跳转页面');
		mui.openWindow('../main/main.html','main');
	}
	else{
		mui.toast('错误，请重新输入！');
	}
	//使用Ajax把账号密码传输到服务器上，在服务器上进行账号密码的校验
	//如果校验成功
	//如果失败，提示错误
});
