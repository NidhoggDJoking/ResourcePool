###    此框架只依赖zepto.js  
>    $.sDialog({
            content: "标题",
	    okBtnText:"左下的标题",
            cancelBtnText:"右下的标题",
            okFn: function() {
                //确定的方法
            },
	    cancelFn: function(){
		//取消的方法
	      }
        })

--------	
		
#####		$.sDialog.defaults = {
#####        autoTime: '2000', //当没有 确定和取消按钮的时候，弹出框自动关闭的时间
#####        "skin": 'block', //皮肤，默认黑色
#####        "content": "我是一个弹出框", //弹出框里面的内容
#####        "width": 100, //没用到
#####        "height": 100, //没用到
#####        "okBtn": true, //是否显示确定按钮
#####        "cancelBtn": true, //是否显示确定按钮
#####        "okBtnText": "确定", //确定按钮的文字
#####        "cancelBtnText": "取消", //取消按钮的文字
#####        "lock": true, //是否显示遮罩
#####        "okFn": function() {}, //点击确定按钮执行的函数
#####        "cancelFn": function() {} //点击取消按钮执行的函数
#####    };
