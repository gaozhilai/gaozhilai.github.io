jQuery(document).ready(function($) {
var num=0;
$("html,body").click(function(e){
	num++
	var n=Math.round(Math.random()*100);//闅忔満鏁�
	if(num==1){
	n="努力";
	}else if(num==2){
	n="奋斗";
	}else if(num==3){
	n="自强";
	}else if(num==4){
	n="不息";
	num=0;
	}

	var $i=$("<b/>").text("+"+n);//娣诲姞鍒伴〉闈㈢殑鍏冪礌
	var x=e.pageX,y=e.pageY;//榧犳爣鐐瑰嚮鐨勪綅缃�
	$i.css({
		"z-index":99999,
		"top":y-20,
		"left":x,
		"position":"absolute",
		"color":"#33FF33"
	});
	$("body").append($i);
	$i.animate(
		{"top":y-180,"opacity":0},
		1500,
		function(){$i.remove();}
	);
	e.stopPropagation();
});
});