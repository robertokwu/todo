/*
 * Author  : Robert Okwu
 */

define(["jquery","underscore","backbone",'text!tmpl/newTaskButton.html'],function($,_,Backbone,NewTaskButtonTmpl){
	 
	var NewTaskButton = Backbone.View.extend({
		el:$("body"),
		initialize:function(){
			$("body").append(NewTaskButtonTmpl);
		},
		render:function(){
			var _template = $("#newTaskButtonTmpl").html();
			$("#wrapper").html(_.template(_template));
		},
		events:{
			'click #newTaskButton': 'createTask'
		},
		createTask:function(){
			window.location.hash = '/newtask';
		}
	});
	
	return new NewTaskButton();
 });