/*
 * Author  : Robert Okwu
 */

define(["jquery","underscore","backbone",'models/task','collections/tasks','views/newtask'
        ,'views/newtaskbutton','views/completed','views/newtaskform'
        ],function($,_,Backbone,Task,Tasks,NewTask,NewTaskButton,CompletedTask,NewTaskForm){
	
	var MainView = Backbone.View.extend({
		el:$("body"),
		initialize:function(){
			
		},
		render:function(){
			NewTaskButton.render();
		},
		events:{
			
		}
		
	
	});
	
	return new MainView();
});