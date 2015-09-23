/*
 * Author  : Robert Okwu
 */

define(['jquery','underscore','backbone','text!tmpl/newTaskForm.html','modules/task'],function($,_,Backbone,NewTaskFormHtml,Task){
	
	var NewTaskForm = Backbone.View.extend({
			el:$("body"),
		 	initialize:function(){
		 		$("body").append(NewTaskFormHtml);
		 	},
		 	render:function(){
		 		var _template = $("#newTaskFormTmpl").html();
		 		$("#wrapper").html(_.template(_template));
		 	},
		 	events:{
		 		"click #cancelTask":"cancelTask",
		 		"click #saveTask":"saveTask",
		 		"keyup #title":"titleCheck"
		 	},
		 	cancelTask:function(){
		 		window.location.hash = "/newtasks";
		 	},
		 	saveTask:function(){
		 		var parameter = {};
		 		parameter.title = $("#title").val();
		 		parameter.description =$("#description").val();
		 		if($("#saveTask").hasClass("active")){
		 			Task.add(parameter);
			 		window.location.hash = "/newtasks";
		 		}
		 		
		 		
		 	},
		 	titleCheck:function(){
		 		if($("#title").val().length > 0){
		 			$("#saveTask").addClass("active").removeClass("inactive");
		 		}else{
		 			$("#saveTask").removeClass("active").addClass("inactive");
		 		}
		 	}
		 	
	
	});
	
	return new NewTaskForm();
});