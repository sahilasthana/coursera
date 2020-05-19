$(function(){

	$("#navbartoggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if(screenWidth<768){
			$("#navbarSupportedContent").collapse('hide');
		}
	});

});

(function(global){

	var dc={};
	var homeHtml="snippets/home-snippet.html";

	var insertHtml= function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
	};
	var showLoading=function(selector){
		var html="<div class='text-center'>";
		html+="<img src='images/ajax-loader.gif'></div>";
		inserHtml(selector,html);
	};

	document.addEventListener("DOMContentLoaded",function(event){

		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(homeHtml,
			function(responseText){
				document.querySelector("#main-content").innerHTML=responseText;
			},
			false);

	});
	global.$dc=dc;

})(window);
