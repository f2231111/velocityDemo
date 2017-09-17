(function($){
   /*var seq = [
   {
   	  elements: $("#div1"),
   	  properties:{width:"300px"},
   	  options: {duration:1000}
   	
   },
   {
   	  elements: $("#div2"),
   	  properties:{width:"300px"},
   	  options: {duration:1000}
   	
   }
   ]
    $.Velocity.RunSequence(seq);*/
    $("#div3").on("mouseover",function(){
    	    $(this).velocity("callout.shake");
    });
    $.Velocity.RegisterUI("lixin.pulse",{
    	    defaultDuration: 300,
    	    calls: [
    	          [{scaleX: 1.1},0.5],
    	          [{scaleX: 1.0},0.5]
    	    ]
    });
    
    $("#div4").on("mouseover",function(){
    	    $(this).velocity("lixin.pulse");
    });
	
})(jQuery);
