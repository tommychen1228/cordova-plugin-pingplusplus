# cordova-plugin-pingplusplus
cordova ping++插件

#安装
cordova plugin add https://github.com/tommychen1228/cordova-plugin-pingplusplus.git --variable URL_SCHEME=YOUR_WX_APP_ID

YOUR_WX_APP_ID是微信开放平台的app id

#使用

##支付
charge是server端计算返回的charge对象
```
Pingpp.createPayment(charge, function(result){
	//支付成功
}, function(error){
	//支付失败, 如果error的数值是'cancel', 代表用户取消支付
});
```