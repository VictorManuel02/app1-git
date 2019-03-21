// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(decive.model);
        $('#disp table td').eq(5).text(decive.cordova);
        $('#disp table td').eq(7).text(decive.platform);
        $('#disp table td').eq(9).text(decive.version);
        $('#disp table td').eq(11).text(decive.uuid);
	},false);//ready device
	
});//document

