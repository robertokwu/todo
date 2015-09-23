/*
 * Author  : Robert Okwu
 */

require.config({
	paths:{
		jquery:"assets/js/library/jquery-2.1.4.min",
		underscore:"assets/js/library/underscore-min",
		backbone:"assets/js/library/backbone-min",
		text:"assets/js/library/require/text",
		order:"assets/js/library/require/order",
		app:"assets/js/app",
		css:"assets/css",
		tmpl:"assets/tmpl",
		views:"assets/js/app/views",
		models:"assets/js/app/models",
		collections:"assets/js/app/collections",
		modules:"assets/js/app/modules"
	}
});

require(["jquery","underscore","backbone","app/Application","text!css/default.css"],function($,_,Backbone,Application,DefaultCss){
	$('head').append("<style>"+DefaultCss+"</style>");
	Application.Initialize();
})