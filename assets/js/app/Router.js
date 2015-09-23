/*
 * Author  : Robert Okwu
 */

define(["jquery","underscore","backbone","views/main",'views/newtask'
        ,'views/newtaskbutton','views/completed','views/newtaskform','modules/task']
		,function($,_,Backbone,Main,NewTask,NewTaskButton,CompletedTask,NewTaskForm,Task){
var	Router = Backbone.Router.extend({
		initialize:function(){
			
		},
		routes:{
			"":"redirect",
			"main":"main",
			"newtasks":"newTasks",
			"newtask":"newTaskForm",
			"completedtasks":"completedTasks"
		},
		redirect:function(){
			window.location.hash = "/main";
		},
		main:function(){
			Main.render();
		},
		newTasks:function(){
			if(!Task.newTaskCount() > 0)
				window.location.hash = "/main";
			else
				NewTask.render(Task.newTasks());
			
		},
		newTaskForm:function(){
			NewTaskForm.render();
		},
		completedTasks:function(){
			if(!Task.completedCount() > 0)
				window.location.hash = "/main";
			else
				CompletedTask.render(Task.completed());
		}
		
	});

var Initialize = function(){
	var router = new Router;
	Backbone.history.start();
}

return {Initialize:Initialize};
});
