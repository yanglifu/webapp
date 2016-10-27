
var data_items = {}
data_items.content = [];

rivets.binders.inner = function(el, value) {	
  $(el).html(value);
}

rivets.bind($('.box'),{
	items:data_items
});

$('#search').click(function(){
	$(".name span").removeClass('index');
	data_items.content = [];
	var inner = $('input[name=search]').val();
	if(inner == ""){		
		getData('all')
	}else{
		getData('search',inner)
	}
});

$("#refresh").click(function(){
	getData('all')
});

$(".name span").each(function(i,dom){

	var val = $(dom).html();
	$(dom).click(function(){
		$(".name span").removeClass('index').eq($(this).index()).addClass('index');
		data_items.content = [];	
		getData('search',val)
	});
});
getData('all');
function getData(type,val){
	$.ajax({
		type:"get",
		url:"lib/js/data.js",
		dataType:"text",
		success:function(data){
			var datalist = eval(data)
			switch(type){
				case 'all':
					datalist.forEach(function(e){
						data_items.content.push(e)	
					});										
					break;
				case 'search':{
					datalist.forEach(function(e){
						if(e.title.indexOf(val) > -1 ){
							data_items.content.push(e)	
						}	
					});
				}		
			}			
		}
	});	
}