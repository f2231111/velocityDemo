(function($){
	//定义变量（动画元素、事件变量）
	var container = $(".container");
	var box = $(".box");
	var buddy = $(".buddy");
	var pop = $(".pop");
	var btn = $(".btn");
	var close = $(".close");
	var imgs = pop.find("img");
	$.Velocity.RegisterUI("lixin.slideUpIn",{
		defaultDuration : 500,
		calls:[
		   //1指的是结束时状态，0指的是开始时状态
		   [{opacity:[1,0],translateY:[0,100]}]
		]
	});
	$.Velocity.RegisterUI("lixin.slideDownOut",{
		defaultDuration : 300,
		calls:[
		   [{opacity:[0,1],translateY:[100,0]}]
		]
	});
	$.Velocity.RegisterUI("lixin.scaleIn",{
		defaultDuration : 300,
		calls:[
		   [{opacity:[1,0],scale:[1,0.3]}]
		]
	});
	$.Velocity.RegisterUI("lixin.scaleOut",{
		defaultDuration : 300,
		calls:[
		   [{opacity:[0,1],scale:[0.3,1]}]
		]
	});
	//定义动画序列
	var seqInit = [{
		elements: container,
		properties: 'lixin.slideUpIn',
		options:{
			delay:300
		}
	},{
		elements: box,
		properties: 'lixin.slideUpIn',
		options:{
			sequenceQueue:false	
		}
	},{
		elements: buddy,
		properties: 'lixin.slideUpIn',
		options:{
			sequenceQueue:false,
			delay:60
		}
	}];
	var seqClick = [{
			elements: container,
			properties: 'lixin.slideDownOut',
		},{
			elements: box,
			properties: 'lixin.slideDownOut',
			options:{
				sequenceQueue:false	
			}
		},{
			elements: container,
			properties: 'lixin.slideUpIn',
		},{
			elements: pop,
			properties: 'lixin.slideUpIn',
			options:{
				sequenceQueue:false	
			}
		},{
			elements: imgs,
			properties: 'lixin.scaleIn',
		}
	];
	var seqClose = [{
			elements: imgs,
			properties: 'lixin.scaleOut',
		},{
			elements: container,
			properties: 'lixin.slideDownOut',
		},{
			elements: pop,
			properties: 'lixin.slideDownOut',
			options:{
				sequenceQueue:false	
			}
		},{
			elements: container,
			properties: 'lixin.slideUpIn',
		},{
			elements: box,
			properties: 'lixin.slideUpIn',
			options:{
				sequenceQueue:false	
			}
		}
	]
	//事件绑定
	$.Velocity.RunSequence(seqInit)
	btn.on("click",function(){
		$.Velocity.RunSequence(seqClick)
	});
	close.on("click",function(){
		$.Velocity.RunSequence(seqClose)
	})
})(jQuery)
